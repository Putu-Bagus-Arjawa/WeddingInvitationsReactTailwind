import { GiCrossedSabres } from "react-icons/gi"
import { MdFormatListBulleted } from "react-icons/md"
import { useEffect, useRef, useState } from 'react';
import { motion, useInView, useScroll } from "framer-motion";



const Nav = () => {
    const [click, setClick] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const refer = useRef<HTMLDivElement>(null);
    const isInView = useInView(refer, { once: false });
    const { scrollY } = useScroll();

    const items =[
        { id: 'home', label: 'Home' },
        { id: 'couple', label: 'Couple' },
        { id: 'event', label: 'Event' },
        { id: 'gallery', label: 'Gallery' },
        { id: 'story', label: 'Story' },
        { id: 'location', label: 'Location' },
        { id: 'rsvp', label: 'RSVP' },
    ]
    useEffect(() => {
        return scrollY.onChange((latest) => {
            if (latest > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    


  return (
    <motion.header 
        ref={refer} 
        className={`z-90 fixed inset-x-0 top-0 flex justify-between items-center py-4 px-6 transition-all duration-700 ${scrolled? "bg-white text-black shadow-xl" : "bg-transparent shadow-none md:text-white"}`}
        initial={{ backgroundColor: 'rgba(255, 255, 255, 0)' }}
        animate={{ backgroundColor: scrolled ? 'rgba(255, 255, 255, 1)' : 'rgba(255, 255, 255, 0)' }}
        transition={{ duration: 0.3 }}
    >
        <div className="flex justify-start gap-x-2 ml-4">
                    {["Arka", "&", "Putri"].map((item, i)=>(
                        <motion.h1 
                        key={i}
                        className="text-rose-600 text-xl tracking-widest font-playfair"
                        initial ={{ opacity: 0, y: -100 }}
                        animate = {isInView? "visible":"hidden"}
                        variants={{
                            hidden:{opacity: 0, y: -100},
                            visible:{
                                opacity:1,
                                y: 0,
                                transition:{
                                    delay: i * 0.2,
                                    type: "spring",
                                    bounce: 0.5
                                }
                            }
                    }}
                            >
                                    {item}
                            </motion.h1>
                    ))}
               </div>
        <nav className="hidden md:flex gap-x-8">
            {items.map((item, idx)=>(
                <motion.a 
                    key={idx}
                    href={`#${item.id}`} className="font-quickSand hover:border-b-2 hover:text-rose-500 hover:border-rose-600 tracking-widest"
                    initial = {{ opacity: 0, y: -100 }}
                    animate ={isInView? "visible" : "hidden"}
                    variants={{
                        hidden:{ opacity: 0, y: -100 },
                        visible:{ opacity: 1, y: 0, transition: {
                            delay: 0.6 + (idx * 0.1),
                            type: "spring",
                            bounce: 0.5
                            }
                        },
                      }}
                >{item.label}</motion.a>
            ))}
        </nav>
        <button 
            onClick={()=> setClick(!click)} 
            className="text-2xl md:hidden text-rose-600 fixed top-4 right-4 z-90"
        >
            {click? <GiCrossedSabres/> : <MdFormatListBulleted/>}
        </button>

            {click &&(
                    <motion.nav 
                        className="flex md:hidden flex-col fixed top-20 right-4 bg-linear-to-br from-rose-100 to-fuchsia-100  w-1/2 items-center p-8 rounded-lg gap-y-8 font-quickSand shadow-xl"
                        initial={{ opacity:0, y:-20}}
                        animate ={{ opacity:1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 1, ease: "easeInOut" }}
                    >
                        {items.map((item)=>(
                            <motion.a href={`#${item.id}`} className={`hover:border-b-2 hover:text-fuchsia-500 hover:border-rose-600`}>{item.label}</motion.a>
                        ))}
                    </motion.nav>
            )}
    </motion.header>
  )
}

export default Nav
