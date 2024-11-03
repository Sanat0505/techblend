import React from "react";
import Footer from "./Footer";
import ContactUs from "./ContactUs";

const teamMembers = [
  {
    name: "Sanat Kakadiya",
    role: "Full Stak Developer",
    description:
      "Passionate about web development, particularly in D-Apps(decentrelized applications using bloackchain)",
    image: "../assets/images/techblend.png",
  },
  {
    name: "Team member 2",
    role: "Role",
    description: "....",
    image: "path-to-image2.jpg",
  },
  {
    name: "Team member 3",
    role: "Role",
    description: "....",
    image: "path-to-image3.jpg",
  },
  {
    name: "Team member 4",
    role: "Role",
    description: "....",
    image: "path-to-image4.jpg",
  },
  {
    name: "Team member 5",
    role: "Role",
    description: "....",
    image: "path-to-image5.jpg",
  },
];

const headerVariants = {
  hidden: { opacity: 0, y: -50 },
  visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } },
};

const titleVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { delay: 0.5, duration: 1 } },
  hover: { scale: 1.1, transition: { yoyo: Infinity, duration: 0.3 } },
};

const Team = () => {
  return (
    <div id="team" className="min-h-screen bg-gray-200 text-black rounded-lg">
      {/* <ParticlesBackground /> */}
      {/* Header */}
      {/* <header className="flex flex-col items-center justify-center py-8 bg-gradient-to-r from-blue-500 to-teal-400 text-white">
        <motion.img
          src={logo}
          alt="TechBlend Logo"
          className="h-24 mb-4"
          initial="hidden"
          animate="visible"
          variants={headerVariants}
        />
        <motion.h1
          className="text-4xl font-bold"
          initial="hidden"
          animate="visible"
          whileHover="hover"
          variants={titleVariants}
        >
          TechBlend
        </motion.h1>
      </header> */}

      {/* About Section */}
      <section className="py-10 px-5 text-center">
        <h2 className="lg:text-4xl text-3xl font-semibold mb-4">Meet Our Team</h2>
        <p className="lg:text-2xl text-lg">
          We are a group of passionate developers and designers dedicated to
          creating cutting-edge tech solutions.
        </p>
      </section>

      {/* Team Section */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-10 rounded-lg">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="bg-white hover:cursor-pointer rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold">{member.name}</h3>
              <p className="text-sm text-gray-500">{member.role}</p>
              <p className="mt-3 text-gray-700">{member.description}</p>
            </div>
          </div>
        ))}
      </section>
      <ContactUs />
    </div>
  );
};

export default Team;
