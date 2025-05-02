import { FaMapLocationDot } from "react-icons/fa6"
import Card from "../components/Card"
import { MdDateRange } from "react-icons/md"

const Events = () => {
    const itemEvents =[
        {
            title:"Ceremony", 
            address :"Widya Sabha, Kampus Unud No.666 Street", 
            date: "14 Februari 2030", 
            desc: "      Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, dicta odit nesciunt fugit culpa quod repellendus repellat tempora.",
            colorBorder: "border-indigo-600"
        },
        {
            title: "After Event", 
            address :"Gedung BG 1.1, Kampus Unud No.666 Street", 
            date:"16 February 2030" , 
            desc: "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, dicta odit nesciunt fugit culpa quod repellendus repellat tempora.",
            colorBorder: "border-rose-600"
        },

    ]
  return (
    <section id="event" className="p-8 h-auto md:h-auto lg:h-screen w-screen flex flex-col justify-center items-center md:my-20 my-40 ">
            <div className="flex flex-col items-center md:gap-y-4 gap-y-8 mb-14">
                <h1 className="text-rose-600 text-4xl font-playfair">What Event Will be Helds?</h1>
                <p className="p-[2px] bg-rose-500 w-20"></p>
            </div>
            <div className="flex flex-col gap-y-8 w-3/4 md:w-4xl ">
                {itemEvents.map((items)=>(
                        <div className={` bg-white max-w-4xl border-l-2 ${items.colorBorder} transition-all duration-200 hover:scale-110`}>
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
                        </div>    
                    ))
                }
            </div>
    </section>
  )
}

export default Events
