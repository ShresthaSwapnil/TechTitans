import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Hero from "./componenets/Hero";
import Gallery from "./componenets/Gallery";
import BoardOfDirectors from "./componenets/BoardOfDirectors";
import FAQ from "./componenets/FAQ";

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  return (
    <main className="min-h-screen bg-black">
      <Hero />
      <Gallery />
      <BoardOfDirectors />
      <FAQ />
    </main>
  );
};

export default App;
