import image1 from "../assets/ceremony.png"
import image2 from "../assets/eveningcouple.png"
import image3 from "../assets/gambar.png"
import image4 from "../assets/imageprompt.png"
import image5 from "../assets/promptaigambar.png.png"
import image6 from "../assets/party.png"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"

const Gallery = () => {
    const imageItems = [image1, image2, image3, image4, image5, image6]
    const refer = useRef<HTMLDivElement>(null);
    const isInView = useInView(refer, { once: false });
  return (
    <section ref={refer} className="h-auto md:h-screen flex justify-center items-center my-60" id="gallery">
        <div className="w-full">
            <div className="flex flex-col items-center md:gap-y-4 gap-y-8 mb-20">
                <motion.h1 
                    className="text-rose-600 mt-8 text-4xl font-playfair"
                    initial ={{ opacity: 0, x :-500, rotate:0 }}
                    animate ={isInView?{ opacity: 1, x :0, rotate: 360 }: {}}
                    transition={{duration: 1.2, ease:"easeInOut"}}
                >Gallery</motion.h1>
                <p className="p-[2px] bg-rose-500 w-14"></p>
            </div>
            <div className="md:max-w-full max-w-full grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 place-items-center">
                {
                    imageItems.map((item, i)=>(
                        <motion.img src={item} 
                            className={` object-top hover:scale-105 active:scale-105 rounded-xl md:w-3/4 w-2/3 h-50 md:h-70 lg:h-70 border-x-4 ${i % 2==0? "border-rose-400":"border-indigo-400"}`} 
                            initial ={{ opacity: 0, y: -100 }}
                            animate = {isInView? "visible":"hidden"}
                            variants={{
                                hidden:{opacity: 0, y: -100},
                                visible:{
                                    opacity:1,
                                    y: 0,
                                    transition:{
                                        delay: i * 0.4,
                                        type: "spring",
                                        bounce: 0.5
                                    }
                                }
                            }}
                        />
                    ))
                }
            </div>
        </div>
    </section>
  )
}

export default Gallery
