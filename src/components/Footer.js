import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Footer = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, 50]);

  return (
    <motion.footer
      className="p-5 bg-black text-white text-center"
      style={{ y }}
    >
      <p>&copy; 2024 Team TechBlend. All rights reserved.</p>
    </motion.footer>
  );
};

export default Footer;
