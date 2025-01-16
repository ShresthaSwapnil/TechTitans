import React from "react";

const BoardOfDirectors = () => {
  const directors = [
    {
      name: "Rohit Mahato",
      role: "Club Advisor",
      image: "/images/bods/Rohit.png",
    },
    {
      name: "Swapnil Shrestha",
      role: "President",
      image: "/images/bods/Swapnil.png",
    },
    {
      name: "Ayush Bhattarai",
      role: "Vice President",
      image: "/images/bods/Ayush.png",
    },
    {
      name: "Aryaman Bista",
      role: "Secretary",
      image: "/images/bods/Aryaman.png",
    },
    {
      name: "Pramesh Rai",
      role: "Communication Chair",
      image: "/images/bods/Pramesh.png",
    },
    {
      name: "Prakash Khattiwada",
      role: "Membership Chair",
      image: "/images/bods/Prakash.png",
    },
    {
      name: "Anjeesha Joshi",
      role: "Treasurer",
      image: "/images/bods/Anjeesha.png",
    },
  ];

  return (
    <section
      id="board"
      className="py-20 bg-gradient-to-b from-black to-green-900"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-poppins font-bold text-white text-center mb-12">
          Board of Directors
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {directors.map((director, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg bg-black hover:scale-105"
            >
              <img
                src={director.image}
                alt={director.name}
                className="w-full h-80 object-cover transition-all duration-300 filter grayscale group-hover:grayscale-0 hover:scale-105 hover:bg-gray-900"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black/30 p-4 group-hover:bg-black/80 transition-all duration-300">
                <h3 className="text-xl font-poppins text-white flex-center">
                  {director.name}
                </h3>
                <p className="text-green-200 flex-center font-montserrat">
                  {director.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BoardOfDirectors;
