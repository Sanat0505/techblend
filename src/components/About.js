import React from "react";
import Team from "./Team";
import '../assets/styles/style.css'

const About = () => (
  <>
  <div className="bg-hero rounded-lg mx-auto min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
    <div className="container mx-auto text-center p-6 sm:p-12 animate__animated animate__backInLeft">
      <p className="text-black leading-relaxed text-base sm:text-lg md:text-xl lg:text-2xl">
        <span className="font-semibold text-xl sm:text-2xl md:text-3xl lg:text-4xl block mb-4">
          Welcome to TECHBLEND
        </span>
        – where innovation and excellence are prioritized for our upcoming Digital Technologies. We are a passionate team of Designers, Developers, and Digital Strategists dedicated to blending advanced technology with creative vision to craft high-performance web solutions.
        <br />
        <br />
        We strive to bring each client’s vision to life in a way that’s future-ready and scalable. Our goal is to deliver products that not only look great but also provide seamless user experiences and lasting impact. Partner with TechBlend, and let’s build a smarter, more connected digital experience together.
      </p>
    </div>
  </div>
  <Team />
</>
);

export default About;
