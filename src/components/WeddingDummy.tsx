import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';


const WeddingDummy = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'couple', label: 'Couple' },
    { id: 'event', label: 'Event' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'rsvp', label: 'RSVP' },
    { id: 'gifts', label: 'Gifts' },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="relative bg-white overflow-hidden">
      <div>
        <title>Sarah & Michael Wedding</title>
        <meta name="description" content="Join us in our special day" />
      </div>

      {/* Floral Background Elements */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute left-0 top-0 h-full w-1/4 bg-[url('https://i.imgur.com/JQJQJQJ.png')] bg-repeat-y bg-left opacity-20"></div>
        <div className="absolute right-0 top-0 h-full w-1/4 bg-[url('https://i.imgur.com/JQJQJQJ.png')] bg-repeat-y bg-right opacity-20 transform scale-x-[-1]"></div>
      </div>

      {/* Navbar */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white bg-opacity-90 shadow-md py-2' : 'bg-transparent py-4'}`}>
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="text-xl font-serif font-bold text-rose-600"
            >
              Sarah & Michael
            </motion.div>

            {/* Desktop Nav */}
            <div className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <motion.button
                  key={item.id}
                  whileHover={{ scale: 1.05, color: '#e11d48' }}
                  whileTap={{ scale: 0.95 }}
                  className={`font-medium ${activeSection === item.id ? 'text-rose-600' : 'text-gray-700'}`}
                  onClick={() => scrollToSection(item.id)}
                >
                  {item.label}
                </motion.button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-gray-700 focus:outline-none"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white bg-opacity-95 overflow-hidden"
            >
              <div className="container mx-auto px-4 py-2 flex flex-col space-y-3">
                {navItems.map((item) => (
                  <motion.button
                    key={item.id}
                    whileTap={{ scale: 0.95 }}
                    className={`py-2 text-left ${activeSection === item.id ? 'text-rose-600' : 'text-gray-700'}`}
                    onClick={() => scrollToSection(item.id)}
                  >
                    {item.label}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div 
          className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1523438885200-e635ba2c371e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center"
        ></div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 text-center px-4"
        >
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-4">
            Sarah <span className="text-rose-200">&</span> Michael
          </h1>
          <p className="text-xl md:text-2xl text-rose-100 font-light mb-8">June 12, 2023 • Bali, Indonesia</p>
          
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block"
          >
            <button className="bg-rose-600 hover:bg-rose-700 text-white font-medium py-3 px-8 rounded-full transition-colors duration-300">
              Our Love Story
            </button>
          </motion.div>
        </motion.div>

        <motion.div 
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      </section>

      {/* Couple Section */}
      <section id="couple" className="py-20 relative">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-800 mb-4">The Couple</h2>
            <div className="w-20 h-1 bg-rose-500 mx-auto"></div>
          </motion.div>

          <div className="flex flex-col md:flex-row items-center justify-center gap-12">
            {/* Bride */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-md"
            >
              <div className="relative mb-6">
                <div className="absolute inset-0 bg-rose-100 rounded-full transform rotate-3"></div>
                <img 
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
                  alt="Bride" 
                  className="relative rounded-full w-64 h-64 object-cover mx-auto border-4 border-white shadow-lg"
                />
              </div>
              <h3 className="text-2xl font-serif font-bold text-gray-800 mb-2">Sarah Johnson</h3>
              <p className="text-gray-600 mb-4">Daughter of Mr. & Mrs. Johnson</p>
              <p className="text-gray-700">
                Sarah is a talented architect who loves designing beautiful spaces. She enjoys traveling and collecting vintage postcards.
              </p>
            </motion.div>

            {/* Heart Icon */}
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="hidden md:block text-rose-500 text-5xl mx-4"
            >
              ❤
            </motion.div>

            {/* Groom */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-md mt-12 md:mt-0"
            >
              <div className="relative mb-6">
                <div className="absolute inset-0 bg-blue-100 rounded-full transform -rotate-3"></div>
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
                  alt="Groom" 
                  className="relative rounded-full w-64 h-64 object-cover mx-auto border-4 border-white shadow-lg"
                />
              </div>
              <h3 className="text-2xl font-serif font-bold text-gray-800 mb-2">Michael Smith</h3>
              <p className="text-gray-600 mb-4">Son of Mr. & Mrs. Smith</p>
              <p className="text-gray-700">
                Michael is a software engineer with a passion for photography. He loves hiking and playing the guitar in his free time.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Event Details */}
      <section id="event" className="py-20 bg-rose-50 relative">
        <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-white to-rose-50"></div>
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-800 mb-4">Wedding Events</h2>
            <div className="w-20 h-1 bg-rose-500 mx-auto"></div>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {/* Ceremony */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-12 bg-white p-8 rounded-lg shadow-lg relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-2 h-full bg-rose-500"></div>
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/3">
                  <h3 className="text-2xl font-serif font-bold text-gray-800 mb-2">Wedding Ceremony</h3>
                  <div className="flex items-center text-gray-600 mb-4">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>10:00 AM - 12:00 PM</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span>Sacred Heart Church, Bali</span>
                  </div>
                </div>
                <div className="md:w-2/3">
                  <p className="text-gray-700 mb-4">
                    Join us as we exchange vows and begin our journey together as husband and wife. The ceremony will be followed by a traditional blessing.
                  </p>
                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className="text-rose-600 font-medium flex items-center"
                  >
                    View on map
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </motion.button>
                </div>
              </div>
            </motion.div>

            {/* Reception */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-12 bg-white p-8 rounded-lg shadow-lg relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-2 h-full bg-blue-500"></div>
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/3">
                  <h3 className="text-2xl font-serif font-bold text-gray-800 mb-2">Wedding Reception</h3>
                  <div className="flex items-center text-gray-600 mb-4">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>6:00 PM - 11:00 PM</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span>The Grand Ballroom, Bali Resort</span>
                  </div>
                </div>
                <div className="md:w-2/3">
                  <p className="text-gray-700 mb-4">
                    Celebrate with us at our wedding reception featuring dinner, dancing, and joyful festivities. Traditional attire welcome!
                  </p>
                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className="text-blue-600 font-medium flex items-center"
                  >
                    View on map
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery" className="py-20 relative">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-800 mb-4">Our Gallery</h2>
            <div className="w-20 h-1 bg-rose-500 mx-auto"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: item * 0.1 }}
                whileHover={{ scale: 1.03 }}
                className="overflow-hidden rounded-lg shadow-lg relative group"
              >
                <img 
                  src={`https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80&${item}`}
                  alt={`Gallery ${item}`}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                  </svg>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-800 mb-4">Location</h2>
            <div className="w-20 h-1 bg-rose-500 mx-auto"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="overflow-hidden rounded-xl shadow-xl"
          >
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3944.042020184093!2d115.2184543153387!3d-8.68475279375826!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd2405e5e0f1a3d%3A0x1a6e6e1b3b0b0b0b!2sSacred%20Heart%20Church%20Bali!5e0!3m2!1sen!2sid!4v1620000000000!5m2!1sen!2sid" 
              width="100%" 
              height="450" 
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              className="w-full"
            ></iframe>
          </motion.div>
        </div>
      </section>

      {/* RSVP Section */}
      <section id="rsvp" className="py-20 relative bg-[url('https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')] bg-cover bg-center bg-fixed">
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">RSVP</h2>
            <div className="w-20 h-1 bg-rose-400 mx-auto"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto bg-white bg-opacity-90 backdrop-blur-sm rounded-xl shadow-xl p-8"
          >
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Full Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent"
                    placeholder="Your email"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="guests" className="block text-gray-700 font-medium mb-2">Number of Guests</label>
                <select 
                  id="guests" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent"
                >
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5+</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Message</label>
                <textarea 
                  id="message" 
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent"
                  placeholder="Your message to the couple"
                ></textarea>
              </div>
              
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                type="submit"
                className="w-full bg-rose-600 hover:bg-rose-700 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-300"
              >
                Confirm Attendance
              </motion.button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Gifts Section */}
      <section id="gifts" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-800 mb-4">Gift Registry</h2>
            <div className="w-20 h-1 bg-rose-500 mx-auto"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <p className="text-gray-700 mb-8 text-lg">
              Your presence at our wedding is the greatest gift of all. However, if you wish to honor us with a gift, we've registered at the following stores:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { name: "Amazon", logo: "https://i.imgur.com/JQJQJQJ.png", url: "#" },
                { name: "Bed Bath & Beyond", logo: "https://i.imgur.com/JQJQJQJ.png", url: "#" },
                { name: "Honeymoon Fund", logo: "https://i.imgur.com/JQJQJQJ.png", url: "#" },
              ].map((store, index) => (
                <motion.a
                  key={index}
                  whileHover={{ y: -5 }}
                  href={store.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-6 bg-gray-50 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="h-16 mb-4 flex items-center justify-center">
                    <img src={store.logo} alt={store.name} className="max-h-full max-w-full" />
                  </div>
                  <h3 className="text-xl font-medium text-gray-800">{store.name}</h3>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h3 className="text-2xl font-serif font-bold mb-4">Sarah & Michael</h3>
            <p className="text-gray-400 mb-6">June 12, 2023 • Bali, Indonesia</p>
            
            <div className="flex justify-center space-x-6 mb-8">
              {['facebook', 'instagram', 'twitter'].map((social) => (
                <motion.a
                  key={social}
                  href="#"
                  whileHover={{ y: -3, color: '#e11d48' }}
                  className="text-gray-400 hover:text-rose-500"
                >
                  <span className="sr-only">{social}</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                  </svg>
                </motion.a>
              ))}
            </div>
            
            <p className="text-gray-500 text-sm">
              &copy; {new Date().getFullYear()} Sarah & Michael Wedding. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};


export default WeddingDummy;
