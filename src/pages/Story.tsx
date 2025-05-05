import img1 from "../assets/party.png";
import img2 from "../assets/gambar.png";
import img3 from "../assets/promptaigambar.png.png";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const Story = () => {
    // Buat ref dan inView untuk setiap article
    const ref1 = useRef(null);
    const ref2 = useRef(null);
    const ref3 = useRef(null);
    
    const isInView1 = useInView(ref1, { once: false, margin: "-150px" });
    const isInView2 = useInView(ref2, { once: false, margin: "-150px" });
    const isInView3 = useInView(ref3, { once: false, margin: "-150px" });

    return (
        <section className="w-screen" id="story">
            <div className="flex flex-col items-center md:gap-y-4 gap-y-8 mb-20">
                <h1 className="text-rose-600 mt-8 text-4xl font-playfair">Our Stories</h1>
                <p className="p-[2px] bg-rose-500 w-14"></p>
            </div>
            <article className="flex md:flex-row flex-col p-14 justify-around" ref={ref1}>
                <motion.div 
                    className="md:w-1/3 w-full mb-8"
                    initial={{ opacity: 0, x: -300 }}
                    animate={isInView1 ? "visible" : "hidden"}
                    variants={{  
                        hidden: { opacity: 0, x: -300 },
                        visible: {
                            opacity: 1,
                            x: 0,
                            transition: {
                                type: "spring",
                                bounce: 0.5,
                                delay: 0.3
                            }
                        }
                    }}
                >
                    <div>
                        <h2 className="font-playfair text-rose-500 text-2xl">First Meet</h2>
                        <p className="text-neutral-500 font-quickSand">14 Februari 2025</p>
                    </div>
                    <p className="font-quickSand">The first time he met her is in some place, he saw her as cutest girl in a life, he was craving her for so long, until he realize he fall in love so much. Due to that moment, he planning to propose her one day.</p>
                </motion.div>
                
                <motion.div 
                    className="flex justify-center md:w-1/3 w-full h-60"
                    initial={{ opacity: 0, x: 300 }}
                    animate={isInView1 ? "visible" : "hidden"}
                    variants={{  
                        hidden: { opacity: 0, x: 300 },
                        visible: {
                            opacity: 1,
                            x: 0,
                            transition: {
                                type: "spring",
                                bounce: 0.5,
                                delay: 0.3
                            }
                        }
                    }}
                >
                    <img src={img1} alt="" className="rounded-xl" />
                </motion.div>
            </article>

            <article className="flex md:flex-row flex-col p-14 justify-around" ref={ref2}>
                <motion.div 
                    className="flex justify-center md:w-1/3 w-full h-60"
                    initial={{ opacity: 0, x: -300 }}
                    animate={isInView2 ? "visible" : "hidden"}
                    variants={{  
                        hidden: { opacity: 0, x: -300 },
                        visible: {
                            opacity: 1,
                            x: 0,
                            transition: {
                                type: "spring",
                                bounce: 0.5,
                                delay: 0.3
                            }
                        }
                    }}
                >
                    <img src={img2} alt="" className="rounded-xl w-full" />
                </motion.div>
                
                <motion.div 
                    className="md:w-1/3 w-full mt-8"
                    initial={{ opacity: 0, x: 300 }}
                    animate={isInView2 ? "visible" : "hidden"}
                    variants={{  
                        hidden: { opacity: 0, x: 300 },
                        visible: {
                            opacity: 1,
                            x: 0,
                            transition: {
                                type: "spring",
                                bounce: 0.5,
                                delay: 0.3
                            }
                        }
                    }}
                >
                    <div>
                        <h2 className="font-playfair text-rose-500 text-2xl">First Date</h2>
                        <p className="text-neutral-500 font-quickSand">14 Februari 2025</p>
                    </div>
                    <p className="font-quickSand">First time he decided to ask her for eating in some restaurant, that moment, a waiter pour a melted cheeese, as if his heart melt with her cuteness.</p>
                </motion.div>
            </article>
            <article className="flex md:flex-row flex-col p-14 justify-around" ref={ref3}>
                <motion.div 
                    className="md:w-1/3 w-full mb-8"
                    initial={{ opacity: 0, x: 300 }}
                    animate={isInView3 ? "visible" : "hidden"}
                    variants={{  
                        hidden: { opacity: 0, x: 300 },
                        visible: {
                            opacity: 1,
                            x: 0,
                            transition: {
                                type: "spring",
                                bounce: 0.5,
                                delay: 0.3
                            }
                        }
                    }}
                >
                    <div>
                        <h2 className="font-playfair text-rose-500 text-2xl">Proposed</h2>
                        <p className="text-neutral-500 font-quickSand">1 Februari 2030</p>
                    </div>
                    <p className="font-quickSand">His birthday is in 14 February, which is valentine, he decided to collecting his brave. He walking to the place, and then he saw her and he bent down and with gallantly and full of confidence he said out of loud, " Pinjem dulu seratus!" What a beautiful day isn't it? She doesn't hear him correctly and she said, " Yes, i want to be your wife." </p>
                </motion.div>
                
                <motion.div 
                    className="flex justify-center w-full md:w-1/3 h-60"
                    initial={{ opacity: 0, x: -300 }}
                    animate={isInView3 ? "visible" : "hidden"}
                    variants={{  
                        hidden: { opacity: 0, x: -300 },
                        visible: {
                            opacity: 1,
                            x: 0,
                            transition: {
                                type: "spring",
                                bounce: 0.5,
                                delay: 0.3
                            }
                        }
                    }}
                >
                    <img src={img3} alt="" className="rounded-xl w-full" />
                </motion.div>
            </article>
        </section>
    );
};
export default Story;