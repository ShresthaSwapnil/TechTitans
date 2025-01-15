import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Hero from "./componenets/Hero";
import Gallery from "./componenets/Gallery";

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  return (
    <main className="min-h-screen bg-black">
      {/* <NavBar /> */}
      <Hero />
      <Gallery />
    </main>
  );
};

export default App;
