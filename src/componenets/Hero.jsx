import { useEffect, useRef } from "react";
import gsap from "gsap";
import { FaInstagram, FaFacebook } from "react-icons/fa";

const Hero = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero-title", {
        y: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
      });

      gsap.from(".social-links a", {
        x: -50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        delay: 0.5,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative h-screen bg-gradient-to-br from-default to-[#222E50]"
    >
      <div className="absolute inset-0 flex flex-col items-center justify-center px-4">
        <h1 className="hero-title font-zentry text-6xl text-white mb-4">
          Tech Titans
        </h1>
        <p className="hero-title font-general text-xl text-green-200 mb-8">
          Turning Passion into Purpose
        </p>

        <div className="recent-event bg-white/10 rounded-lg p-6 backdrop-blur-sm max-w-md w-full mb-8 hover:shadow-lg hover:shadow-white/20">
          <h3 className="font-robert-medium text-2xl text-white mb-2 flex-center">
            Recent Event
          </h3>
          <p className="text-blue-100">
            Successfully conducted "Web Innovators Hackathon 2024" with over 40
            participants!
          </p>
        </div>

        <div className="social-links flex gap-6">
          <a
            href="https://www.facebook.com/techtitans"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-200 hover:text-white"
          >
            <FaFacebook size={24} />
          </a>
          <a
            href="https://www.twitter.com/techtitans"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-200 hover:text-white"
          >
            <FaInstagram size={24} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
