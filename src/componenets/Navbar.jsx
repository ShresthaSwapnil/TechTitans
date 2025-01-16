import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.nav
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          exit={{ y: -100 }}
          className="fixed top-0 z-50 w-full bg-black/80 backdrop-blur-sm"
        >
          <div className="container mx-auto flex items-center justify-between p-4">
            <div
              className="flex items-center gap-2 cursor-pointer"
              onClick={() => window.scrollTo(0, 0)}
            >
              <img
                src="/logo.png"
                alt="Tech Titans Logo"
                className="h-10 w-10"
              />
              <span className="font-poppins-bold text-xl text-white ">
                Tech Titans
              </span>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <a
                className="nav-hover-btn"
                onClick={() => window.scrollTo(0, 0)}
              >
                Home
              </a>
              <a href="#gallery" className="nav-hover-btn">
                Gallery
              </a>
              <a href="#board" className="nav-hover-btn">
                Board
              </a>
              <a href="#faq" className="nav-hover-btn">
                FAQ
              </a>
              <a href="#contact" className="nav-hover-btn">
                Contact
              </a>
            </div>
          </div>
        </motion.nav>
      )}
    </AnimatePresence>
  );
};

export default Navbar;
