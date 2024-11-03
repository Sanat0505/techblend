// About.js
import React from "react";
import { motion } from "framer-motion";
import herosection_bg from "../assets/images/techblend_hero.webp";
import Footer from "./Footer";
import Team from "./Team";
import '../assets/styles/style.css'

const About = () => (
  <>
    <div className=" bg-hero rounded-lg mx-auto h-[100vh] flex items-center justify-center">
      {/* <div className=" container mx-auto  px-6">
        <div className="md:flex md:justify-between md:gap-12 flex-row-reverse"> */}
      <div className="container mx-auto text-center  p-12 animate__animated animate__backInLeft">
        <p className="text-black leading-relaxed">
          <span className="font-semibold text-2xl">Welcome to TECHBLEND</span> – where innovation and excellence are prioritised
          for our upcoming Digital Technologies. We are a passionate team of
          Designers, Developers and Digital Strategists dedicated to blending
          advanced technology with creative vision to craft high-performance web
          solutions. We strive to bring each client’s vision to life in a way
          that’s future-ready and scalable.Our goal is to deliver products that
          not only look great but also provide seamless user experiences and
          lasting impact. Partner with TechBlend, and let’s build a smarter,
          more connected digital experience together.
        </p>
        {/* </div>
        </div> */}
      </div>
    </div>
    <Team />
  </>
);

export default About;
