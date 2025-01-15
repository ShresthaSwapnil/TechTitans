import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Gallery = () => {
  const sectionRef = useRef(null);
  const carouselRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(carouselRef.current, {
        xPercent: -100,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=300%",
          pin: true,
          scrub: 1,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const images = [
    "/images/gallery/Image1.jpg",
    "/images/gallery/Image2.jpg",
    "/images/gallery/Image3.jpg",
    "/images/gallery/Image4.jpg",
    "/images/gallery/Image5.jpg",
    "/images/gallery/Image6.jpg",
    "/images/gallery/Image7.jpg",
    "/images/gallery/Image8.jpg",
    // "/img/BoDs/Aryaman.png",
  ];

  return (
    <section
      ref={sectionRef}
      id="gallery"
      className="h-screen/2 overflow-hidden bg-black mt-10"
    >
      <h2 className="text-4xl font-zentry text-white text-center mb-10">
        Gallery
      </h2>
      <div ref={carouselRef} className="flex gap-4 p-4">
        {images.map((src, index) => (
          <div key={index} className="gallery-img-container flex-shrink-0">
            <div
              className="gallery-img"
              style={{ backgroundImage: `url(${src})` }}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
