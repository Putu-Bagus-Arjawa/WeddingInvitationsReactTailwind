import { FaMapLocationDot } from "react-icons/fa6"
import Card from "../components/Card"
import { MdDateRange } from "react-icons/md"
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const Events = () => {
      const refer = useRef<HTMLDivElement>(null);
      const isInView = useInView(refer, { once: false });
    const itemEvents =[
        {
            title:"Ceremony", 
            address :"Widya Sabha, Kampus Unud No.666 Street", 
            date: "14 Februari 2030", 
            desc: "The ceremony will be held there, full of beauty white dress for groom and bride, they will engaged as husband and wife.",
            colorBorder: "border-indigo-600"
        },
        {
            title: "After Event", 
            address :"Gedung BG 1.1, Kampus Unud No.666 Street", 
            date:"16 February 2030" , 
            desc: "After event, there is an event that's really fun, singing, dancing, eating, etc.",
            colorBorder: "border-rose-600"
        },

    ]
  return (
    <section ref={refer}id="event" className="p-8 h-auto md:h-auto lg:h-screen w-screen flex flex-col justify-center items-center md:my-20 my-40 ">
            <div className="flex flex-col items-center md:gap-y-4 gap-y-8 mb-14">
                <motion.h1 
                    className="text-rose-600 text-4xl font-playfair"
                    initial ={{ scale: 0 }}
                    animate = {isInView?{ scale: 1, transition:{duration: 1, ease:"easeOut"}}: {}}
                >What Event Will be Helds?</motion.h1>
                <p className="p-[2px] bg-rose-500 w-20"></p>
            </div>
            <div className="flex flex-col gap-y-8 w-3/4 md:w-4xl ">
                {itemEvents.map((items, idx)=>(
                        <motion.div key={idx} className={` bg-white max-w-4xl border-l-2 ${items.colorBorder}`}
                            initial ={{ scale: 0 }}
                            animate = {isInView?{ scale: 1, transition:{delay:idx *0.4,duration: 1, ease:"easeOut"}}: {}}
                        >
                        <Card>
                            <div className="flex md:flex-row flex-col w-full justify-between">
                                <div className="md:w-1/2 w-full">
                                    <h2 className="text-rose-600 text-[18px]">{items.title}</h2>
                                    <div className="flex md:flex-col flex-row w-full justify-between  items-center">
                                        <div className="flex w-full gap-x-2">
                                            <MdDateRange/>
                                            <p>{items.date}</p>
                                        </div>
                                        <div className="flex items-center gap-x-2">
                                            <FaMapLocationDot/>
                                            <p>{items.address}</p>
                                        </div>
                                    </div>
                                    
                                </div>
                                <div className="flex flex-col gap-y-4 w-full md:items-center">
                                    <p className="w-full md:w-1/2 font-quickSand">{items.desc}</p>
                                    <button className="rounded-full bg-linear-to-tl px-4 py-2 from-rose-500 to-fuchsia-500 hover:from-rose-300 hover:to-fuchsia-300 w-2/3 md:w-1/3">See More</button>
                                </div>
                            </div>
                        </Card>
                        </motion.div>    
                    ))
                }
            </div>
    </section>
  )
}

export default Events
