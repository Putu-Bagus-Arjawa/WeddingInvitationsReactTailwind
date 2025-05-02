import img1 from "../assets/party.png"
import img2 from "../assets/gambar.png"
import img3 from "../assets/promptaigambar.png.png"
const Story = () => {
  return (
    <section className="w-screen" id="story">
        <div className="flex flex-col items-center md:gap-y-4 gap-y-8 mb-20">
            <h1 className="text-rose-600 mt-8 text-4xl font-playfair">Our Stories</h1>
            <p className="p-[2px] bg-rose-500 w-14"></p>
        </div>
        <article className="flex md:flex-row flex-col p-14 justify-around">
            <div className="md:w-1/3 w-full mb-8">
                <div>
                    <h2 className="font-playfair text-rose-500 text-2xl">First Meet</h2>
                    <p className="text-neutral-500 font-quickSand">14 Februari 2025</p>
                </div>
                <p className="font-quickSand">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos iure assumenda aspernatur vel similique earum animi explicabo error exercitationem in?Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet, quidem.</p>
            </div>
            <div className="flex justify-center md:w-1/3 w-full h-60 ">
                <img src={img1} alt="" className="rounded-xl"  />
            </div>
        </article>
        <article className="flex md:flex-row flex-col p-14 justify-around">
            <div className="flex justify-center md:w-1/3 w-full h-60 ">
                <img src={img2} alt="" className="rounded-xl w-full"  />
            </div>
            <div className="md:w-1/3 w-full mt-8">
                <div>
                    <h2 className="font-playfair text-rose-500 text-2xl">First Date</h2>
                    <p className="text-neutral-500 font-quickSand">14 Februari 2025</p>
                </div>
                <p className="font-quickSand">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos iure assumenda aspernatur vel similique earum animi explicabo error exercitationem in?Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet, quidem.</p>
            </div>
        </article>
        <article className="flex md:flex-row flex-col p-14 justify-around">
            <div className="md:w-1/3 w-full mb-8">
                <div>
                    <h2 className="font-playfair text-rose-500 text-2xl">Proposed</h2>
                    <p className="text-neutral-500 font-quickSand">14 Februari 2025</p>
                </div>
                <p className="font-quickSand">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos iure assumenda aspernatur vel similique earum animi explicabo error exercitationem in?Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet, quidem.</p>
            </div>
            <div className="flex justify-center w-full md:w-1/3 h-60 ">
                <img src={img3} alt="" className="rounded-xl w-full"  />
            </div>
        </article>
    </section>
  )
}

export default Story
