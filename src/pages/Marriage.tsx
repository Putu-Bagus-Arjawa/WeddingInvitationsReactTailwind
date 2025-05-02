import Card from "../components/Card"
import Quotes from "../components/Quotes"
import male from "../assets/male.png"
import female from "../assets/female.png"

const Marriage = () => {
    const couple = [
        {name: "Arka Bumantara Radjawa", kid: "First Son of Anjaya Budiantara & Ratna Rina", image:male},
        {name: "Putri Luna Djelita", kid: "Second daughter of Bramantya Bumantara & Serliyana Djelita", image:female}
    ]
  return (
    <section className="md:min-h-screen h-auto" id="couple">
      <Quotes/>
      <div className="flex flex-col items-center md:gap-y-4 gap-y-8">
        <h1 className="text-rose-600 mt-8 text-4xl font-playfair">The Couple</h1>
        <p className="p-[2px] bg-rose-500 w-14"></p>
      </div>
      <section className="p-8 md:min-h-screen h-auto flex md:flex-row flex-col justify-center gap-x-20 items-center gap-y-8">
        {couple.map((items)=>(
            <Card>
                <div className="flex flex-col items-center max-w-80">
                    <img src={items.image} alt="" className="h-50 w-50 mb-8 rounded-full" />
                    <h1 className="font-playfair text-2xl text-rose-500">{items.name}</h1>
                    <p className="text-neutral-500 font-quickSand text-center">{items.kid}</p>
                </div>
            </Card>
        ))}
      </section>
    </section>
  )
}

export default Marriage
