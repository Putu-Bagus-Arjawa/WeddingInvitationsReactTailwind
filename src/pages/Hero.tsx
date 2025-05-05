import { motion, useInView } from "framer-motion"
import { useRef } from "react";

const Hero = () => {
    const time = [4, 9, 12, 5, 27, 0]
    const refer = useRef<HTMLDivElement>(null);
    const isInView = useInView(refer, { once: false });
  return (
    <motion.section 
        className="min-h-screen flex justify-center" id="home"
        ref={refer}
    >
        <div className="bg-linear-to-r from-black/0 via-black/40 to-black/0 min-h-screen w-full flex justify-center items-center gap-y-8 flex-col">
            <div className="flex flex-col justify-center items-center">
                <motion.h1 
                    className="font-playfair text-5xl text-white tracking-widest"
                    initial ={{ opacity: 0, x :-500 }}
                    animate ={isInView?{ opacity: 1, x :0 }: {}}
                    transition={{duration: 1, ease:"easeInOut"}}
                >The Marriage of</motion.h1>
                <motion.h2 
                    className="text-3xl  text-white tracking-wide italic font-playfair"
                    initial ={{ opacity: 0, x :500 }}
                    animate ={isInView?{ opacity: 1, x :0 }: {}}
                    transition={{duration: 1, ease:"easeInOut"}}
                >ARKA & PUTRI</motion.h2>
            </div>
            <div className="flex gap-4">
                {time.map((item, idx)=> (
                    <motion.div 
                        key={idx}
                        className="bg-white rounded-xl w-12 h-12 flex items-center justify-center font-playfair hover:scale-110 active:scale-110"
                        initial = {{ opacity: 0, y: 200 }}
                        animate ={isInView? "visible" : "hidden"}
                        variants={{
                            hidden:{ opacity: 0, y: 200 },
                            visible:{ opacity: 1, y: 0, transition: {
                                delay: 0.7 + (idx * 0.2),
                                type: "spring",
                                bounce: 0.6
                                }
                            },
                        }}
                    >{item}</motion.div>
                ))}
            </div>
        </div>
    </motion.section>
  )
}

export default Hero
