import React from "react";
import ContactUs from "./ContactUs";
import sanatImage from "../assets/images/sanat1.png";
import asmaImage from "../assets/images/asma.png";
import anushkaImage from "../assets/images/anushka.png";
import aartiImage from "../assets/images/aarti.png";
import shehlaImage from "../assets/images/shehla.png";
import Product from "./Product";

const teamMembers = [
  {
    name: "Sanatkumar Kakadiya",
    role: "Full Stak Developer",
    description:
      "Passionate about web development, particularly in D-Apps(Decentrelized Applications development using bloackchain)",
    image: sanatImage,
  },
  {
    name: "Anushka Jajal",
    role: "Backend developer",
    description:
      "I am a backend developer specializing in Python and Django, with a strong foundation in building scalable web applications. ",
    image: anushkaImage,
  },
  {
    name: "Asmaa Abubader",
    role: "Frontend Developer",
    description:
      "A UX Designer in progress ( as entry level). Having a solid knowledge using Mysql",
    image: asmaImage,
  },
  {
    name: "Aarti Majumdar",
    role: "Web developer",
    description:
      "Deeply committed to advancing web and API development, utilizing  frontend development expertise to build responsive, intuitive, and high-performing digital solutions.",
    image: aartiImage,
  },
  {
    name: "Shehla Shehla",
    role: "Backend Developer",
    description:
      "A dedicated and enthusiastic individual with a passion for Software Development and Backend Development.",
    image: shehlaImage,
  },
];

const Team = () => {
  return (
    <div id="team" className="min-h-screen bg-silver_main text-black rounded-lg">
      {/* About Section */}
      <section className="py-10 px-5 text-center">
        <h2 className="lg:text-4xl text-3xl font-semibold mb-4">
          Meet Our Team
        </h2>
        <p className="lg:text-2xl text-lg">
        We are a group of dedicated students in development and design, focused on building innovative tech solutions and advancing our skills through hands-on projects.
        </p>
      </section>

      {/* Team Section */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-5 md:p-10 rounded-lg">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="bg-white hover:cursor-pointer rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-full h-48 md:h-64 lg:h-96 object-cover"
            />
            <div className="p-6 text-justify">
              <h3 className="text-2xl font-semibold">{member.name}</h3>
              <p className="text-sm text-gray-500">{member.role}</p>
              <p className="mt-3 text-gray-700">{member.description}</p>
            </div>
          </div>
        ))}
      </section>
      <Product />

      <ContactUs />
    </div>
  );
};

export default Team;
