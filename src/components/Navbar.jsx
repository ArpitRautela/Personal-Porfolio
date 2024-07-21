import { useState } from "react";
import { motion } from "framer-motion";
import logo from "../assets/NavBarLogo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { FaInstagram } from "react-icons/fa6";

const Navbar = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const getRandomPosition = () => {
    const maxX = window.innerWidth - 50; 
    const maxY = window.innerHeight - 50; 
    return {
      x: Math.floor(Math.random() * maxX),
      y: Math.floor(Math.random() * maxY),
    };
  };

  const handleLogoClick = () => {
    setPosition(getRandomPosition());
  };

  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <motion.img
          src={logo}
          alt="logo"
          className="mx-2 w-10 h-10"
          onClick={handleLogoClick}
          initial={{ x: 0, y: 0 }}
          animate={{ x: position.x, y: position.y }}
          transition={{ duration: 0.5 }}
        />
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a href="https://www.linkedin.com/in/arpit-rautela-3089ab1b5/"><FaLinkedin /></a>
        <a href="https://github.com/ArpitRautela"><FaGithub /></a>
        <a href="https://leetcode.com/u/arpitrautela/"><SiLeetcode /></a>
        <a href="https://www.instagram.com/arpit_rautela/"><FaInstagram /></a>
      </div>
    </nav>
  );
};

export default Navbar;
