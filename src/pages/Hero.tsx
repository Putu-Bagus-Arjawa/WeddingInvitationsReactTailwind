

const Hero = () => {
    const time = [4, 9, 12, 5, 27, 0]
  return (
    <section className="min-h-screen flex justify-center" id="home">
        <div className="bg-linear-to-r from-black/0 via-black/40 to-black/0 min-h-screen w-full flex justify-center items-center gap-y-8 flex-col">
            <div className="flex flex-col justify-center items-center">
                <h1 className="font-playfair text-5xl text-white tracking-widest">The Marriage of</h1>
                <h2 className="text-3xl  text-white tracking-wide italic font-playfair">ARKA & PUTRI</h2>
            </div>
            <div className="flex gap-4">
                {time.map((item)=> (
                    <div className="bg-white rounded-xl w-12 h-12 flex items-center justify-center font-playfair">{item}</div>
                ))}
            </div>
        </div>
    </section>
  )
}

export default Hero
