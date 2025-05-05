import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const Location = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  return (
    <section className="h-auto mb-8 p-8" id="location" ref={ref}>
      <div>
        <motion.div
          className="flex flex-col items-center md:gap-y-4 gap-y-8 mb-20"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <motion.h1
            className="text-rose-600 mt-8 text-4xl font-playfair"
            initial={{ opacity: 0, scale: 0.4 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Location
          </motion.h1>
          <motion.p
            className="p-[2px] bg-rose-500 w-14"
            initial={{ width: 0 }}
            animate={isInView ? { width: 56 } : {}}
            transition={{ delay: 0.4, duration: 0.8, ease: "easeInOut" }}
          ></motion.p>
        </motion.div>

        <motion.div
          className="flex justify-center items-center"
          initial={{ opacity: 0, scale: 0.1 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3944.042020184093!2d115.2184543153387!3d-8.68475279375826!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd2405e5e0f1a3d%3A0x1a6e6e1b3b0b0b0b!2sSacred%20Heart%20Church%20Bali!5e0!3m2!1sen!2sid!4v1620000000000!5m2!1sen!2sid"
            height="250"
            allowFullScreen
            className="w-2/3 border-2 border-rose-500 rounded-2xl shadow-xl"
          ></iframe>
        </motion.div>
      </div>
    </section>
  );
};

export default Location;