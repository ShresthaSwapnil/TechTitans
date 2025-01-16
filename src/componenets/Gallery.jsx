import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Draggable } from "gsap/Draggable";

gsap.registerPlugin(ScrollTrigger, Draggable);

const Gallery = () => {
  const sectionRef = useRef(null);
  const carouselRef = useRef(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [activeIndex, setActiveIndex] = useState(0);

  const images = [
    { src: "/images/gallery/Image1.jpg", title: "" },
    { src: "/images/gallery/Image2.jpg", title: "" },
    { src: "/images/gallery/Image3.jpg", title: "" },
    { src: "/images/gallery/Image4.jpg", title: "" },
    { src: "/images/gallery/Image5.jpg", title: "" },
    { src: "/images/gallery/Image6.jpg", title: "" },
    { src: "/images/gallery/Image7.jpg", title: "" },
    { src: "/images/gallery/Image8.jpg", title: "" },
  ];

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    let dragInstance;

    const ctx = gsap.context(() => {
      if (!isMobile) {
        // Desktop version - Horizontal scroll
        gsap.to(carouselRef.current.children, {
          xPercent: -100 * (images.length - 3),
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            pin: true,
            scrub: 1,
            snap: 1 / (images.length - 1),
            end: () => "+=" + carouselRef.current.offsetWidth,
          },
        });
      } else {
        // Mobile version - Draggable
        if (dragInstance) dragInstance.kill();

        dragInstance = Draggable.create(carouselRef.current, {
          type: "x",
          inertia: true,
          bounds: {
            minX: -carouselRef.current.offsetWidth + window.innerWidth,
            maxX: 0,
          },
          snap: {
            x: function (endValue) {
              const increment = window.innerWidth * 0.8; // 80% of screen width
              return Math.round(endValue / increment) * increment;
            },
          },
          onDrag: function () {
            const increment = window.innerWidth * 0.8;
            const newIndex = Math.abs(Math.round(this.x / increment));
            setActiveIndex(Math.min(newIndex, images.length - 1));
          },
        })[0];
      }
    }, sectionRef);

    return () => {
      ctx.revert();
      if (dragInstance) dragInstance.kill();
    };
  }, [isMobile, images.length]);

  return (
    <section
      ref={sectionRef}
      id="gallery"
      className="bg-black py-16 min-h-screen/2 "
    >
      <div className="container mx-auto mt-2">
        <h2 className="text-4xl font-poppins font-bold text-white text-center">
          Our Gallery
        </h2>
      </div>

      <div className="overflow-hidden">
        <div
          ref={carouselRef}
          className={`flex gap-8 px-4 ${
            isMobile ? "touch-pan-x" : "h-[50vh] flex-center"
          }`}
          style={{
            width: isMobile ? `${images.length * 80}vw` : "fit-content",
            paddingLeft: isMobile ? "5vw" : "0",
          }}
        >
          {images.map((image, index) => (
            <div
              key={index}
              className={`relative flex-shrink-0 ${
                isMobile
                  ? "w-[80vw] h-[40vh]"
                  : " overflow-hidden rounded-lg size-72"
              }`}
            >
              <div className="w-full h-full rounded-2xl overflow-hidden mx-4">
                <img
                  src={image.src}
                  alt={image.title}
                  className={`object-cover ${
                    isMobile ? "w-full" : "gallery-img"
                  } transition-transform duration-200 transform hover:scale-105`}
                />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-xl font-poppins text-white">
                    {image.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Dots for Mobile */}
      {isMobile && (
        <div className="flex justify-center gap-2 mt-6">
          {images.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full transition-all ${
                index === activeIndex ? "bg-blue-500 w-4" : "bg-gray-400"
              }`}
              onClick={() => {
                const increment = window.innerWidth * 0.8;
                gsap.to(carouselRef.current, {
                  x: -index * increment,
                  duration: 0.5,
                  ease: "power2.out",
                });
                setActiveIndex(index);
              }}
            />
          ))}
        </div>
      )}

      {/* Scroll Indicator for Desktop */}
      {!isMobile && (
        <div className="text-center mt-12 text-white/60 font-montserrat">
          Scroll to explore more →
        </div>
      )}
    </section>
  );
};

export default Gallery;
