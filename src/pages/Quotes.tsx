import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const Quotes = () => {
  const refer = useRef<HTMLDivElement>(null);
  const isInView = useInView(refer, { once: false });
  
  return (
    <motion.section 
      className="flex justify-center items-center p-12 font-quickSand text-2xl tracking-wide bg-linear-to-l from-rose-500 to-fuchsia"
      ref={refer}
      initial={{ opacity: 0, scale: 0 }}
      animate={isInView ? { opacity: 1, scale: 1, transition:{
        duration: 1.5, ease:"easeInOut"
      }} : {}}
    >
      <p className="italic">
        <span>"</span>
        
        <span >
          The World Might End One Day, But Their Love Will Remain Forever
        </span>
        
        <span>"</span>
      </p>
    </motion.section>
  )
}

export default Quotes;