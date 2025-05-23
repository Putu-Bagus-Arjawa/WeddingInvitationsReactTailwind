import { motion, useInView } from "framer-motion";
import { useRef } from "react";
const RSVP = () => {
    const number = ["1", "2", "3", "4", "5+"]
    const ref = useRef(null);
    const isInView = useInView(ref, { once: false});
  return (
    <section className="h-auto mt-14 w-screen p-10 mb-14 " id="rsvp" ref={ref}>
        <div className="w-full flex flex-col items-center justify-center">
            <div className="flex flex-col items-center md:gap-y-4 gap-y-8 mb-20">
                <motion.h1 
                    className="text-rose-600 mt-8 text-4xl font-playfair"
                    initial = {{ opacity: 0, x: -300, rotate: 0}}
                    animate ={isInView? {opacity: 1, x: 0, rotate: 360, transition:{duration:1.5, ease:"easeIn"}}: {}}
                >
                    RSVP
                </motion.h1>
                <p className="p-[2px] bg-rose-500 w-14"></p>
            </div>
            <motion.form 
                className="p-4 w-4/5 md:w-3/5  bg-white shadow-lg"
                initial ={{ opacity: 0, scale: 0, x:500, rotate:60 }}
                animate ={isInView?{ opacity: 1, scale: 1, x: 0, rotate: 0, transition: {duration: 1.75} }: {}}

            >
                <div className="flex md:flex-row flex-col justify-between gap-8 mb-4">
                    <div className="flex flex-col w-full gap-y-2">
                        <label htmlFor="" className="font-playfair font-semibold">Full Name</label>
                        <input type="text" placeholder="Full Name"  
                            className="font-quickSand border  focus:outline-none rounded-xl focus:ring-2 focus:ring-rose-500 focus:border-transparent  px-2 py-1"
                        />
                    </div>
                    <div className="flex flex-col w-full gap-y-2">
                        <label htmlFor="" className="font-playfair font-semibold">Email</label>
                        <input type="text" placeholder="Full Name" 
                            className="font-quickSand border  focus:outline-none rounded-xl focus:ring-2 focus:ring-rose-500 focus:border-transparent px-2 py-1" 
                        />
                    </div>
                </div>
                <div>
                    <label htmlFor="" className="font-playfair font-semibold">Number of Guests</label>
                    <select name="" id="" className="w-full border  focus:outline-none rounded-xl focus:ring-2 focus:ring-rose-500 focus:border-transparent">
                        {number.map((items)=>(
                            <option value={items} className="font-quickSand">{items}</option>
                        ))}
                    </select>
                </div>
                <div className="mb-8">
                    <label htmlFor="" className="font-playfair font-semibold">Message</label>
                    <textarea 
                        rows={4}  
                        id="" 
                        className="w-full font-quickSand border  focus:outline-none rounded-xl focus:ring-2 focus:ring-rose-500 focus:border-transparent px-4 py-2"></textarea>
                </div>
                <button className="rounded-full bg-linear-to-tl px-4 py-2 from-rose-500 to-fuchsia-500 hover:from-rose-300 hover:to-fuchsia-300 w-full md:w-1/3">Confirm Attendance</button>
            </motion.form>
        </div>
    </section>
  )
}

export default RSVP
