import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Hero from "./componenets/Hero";
// import GallerySection from "./components/Gallery";
// import BoardSection from "./components/BoardSection";
// import FAQSection from "./components/FAQ";
// import ContactSection from "./components/Contact";
// import Footer from "./components/Footer";

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  return (
    <main className="min-h-screen bg-black">
      {/* <NavBar /> */}
      <Hero />
      {/* <GallerySection />
      <BoardSection />
      <FAQSection />
      <ContactSection /> */}
      {/* <Footer /> */}
    </main>
  );
};

export default App;
