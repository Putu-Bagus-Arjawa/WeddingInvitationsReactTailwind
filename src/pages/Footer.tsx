import { BsInstagram, BsTiktok, BsTwitterX } from "react-icons/bs"
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
const Footer = () => {
  const medsos = [<BsInstagram/>, <BsTiktok/>, <BsTwitterX/>]
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false});
  return (
    <motion.footer className="flex flex-col justify-center items-center p-4 bg-linear-to-tr from-amber-300 via-rose-300 to-fuchsia-400" ref={ref}
      initial ={{ opacity:0, scale:0 }}
      animate ={isInView?{ opacity:1, scale:1, transition: {duration:1.75}}: {}}
    >
      <h3 className="font-playfair text-3xl tracking-wide mb-4">ARKA & PUTRI</h3>
      <p className="text-neutral-600 mb-6">Februari 12, 2030 • Bali, Indonesia</p>
      <div className="flex gap-4 mb-10">
        {medsos.map((item)=>(
          <div className="hover:text-red-500 text-2xl">{item}</div>
        ))}
      </div>
      <p className="font-quickSand font-semibold">©Wedding Invitation by Putu Bagus Arjawa. All Rights Reserved.</p>
    </motion.footer>
  )
}

export default Footer
