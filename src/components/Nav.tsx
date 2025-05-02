import { GiCrossedSabres } from "react-icons/gi"
import { MdFormatListBulleted } from "react-icons/md"
import { useState } from 'react';



const Nav = () => {
    const [click, setClick] = useState(false)
    const items =[
        { id: 'home', label: 'Home' },
        { id: 'couple', label: 'Couple' },
        { id: 'event', label: 'Event' },
        { id: 'gallery', label: 'Gallery' },
        { id: 'story', label: 'Story' },
        { id: 'location', label: 'Location' },
        { id: 'rsvp', label: 'RSVP' },
    ]
  return (
    <header className="z-10 fixed inset-x-0 top-0 flex justify-between items-center py-4 px-6 bg-white shadow-xl">
        <h1 className="text-rose-600 text-xl tracking-widest font-playfair ml-24">Arka & Putri</h1>
        <nav className="hidden md:flex gap-x-8">
            {items.map((item)=>(
                <a href={`#${item.id}`} className="hover:border-b-2 hover:text-fuchsia-500 hover:border-rose-600">{item.label}</a>
            ))}
        </nav>
        <button 
            onClick={()=> setClick(!click)} 
            className="text-2xl md:hidden"
        >
            {click?<GiCrossedSabres/>: <MdFormatListBulleted/>}
        </button>
        {click &&(
                <nav className="flex md:hidden gap-x-8 flex-col fixed top-20 inset-x-20 bg-linear-to-br from-rose-300 to-fuchsia-200  w-3/4 items-center p-8 rounded-lg gap-y-8 font-quickSand">
                    {items.map((item)=>(
                        <a href={`#${item.id}`} className="hover:border-b-2 hover:text-fuchsia-500 hover:border-rose-600">{item.label}</a>
                    ))}
                </nav>
        )}
    </header>
  )
}

export default Nav
