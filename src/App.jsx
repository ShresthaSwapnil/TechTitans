import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Hero from "./componenets/Hero";
import Gallery from "./componenets/Gallery";
import BoardOfDirectors from "./componenets/BoardOfDirectors";
import FAQ from "./componenets/FAQ";
import Contact from "./componenets/Contact";
import Footer from "./componenets/Footer";
import Navbar from "./componenets/Navbar";

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  return (
    <main className="min-h-screen bg-black">
      <Navbar />
      <Hero />
      <Gallery />
      <BoardOfDirectors />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
};

export default App;
