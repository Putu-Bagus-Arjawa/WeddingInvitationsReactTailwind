import { BsMusicNote } from "react-icons/bs";
import Nav from "./components/Nav";
import Hero from "./pages/Hero";
import Marriage from "./pages/Marriage";
import Events from "./pages/Events";
import Gallery from "./pages/Gallery";
import Footer from "./pages/Footer";
import Story from "./pages/Story";
import Location from "./pages/Location";
import RSVP from "./pages/RSVP";
import Quotes from "./pages/Quotes";

const App = () => {
  return (
    <div className="w-full overflow-y-hidden">
      <div className="z-40 fixed bottom-4 right-4 bg-white p-2 rounded-full hover:bg-rose-400">
        <BsMusicNote/>
      </div>
      <Nav/>
      <Hero/>
      <Quotes/>
      <Marriage/>  
      <Events/>
      <Gallery/>
      <Story/>
      <Location/>
      <RSVP/>
      <Footer/>

    </div>
  );
};

export default App;
