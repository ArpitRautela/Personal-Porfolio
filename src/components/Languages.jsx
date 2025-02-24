import { TbBrandCpp } from "react-icons/tb";
import { FaJava, FaNodeJs } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { TbSql } from "react-icons/tb";
import { FaReact } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaNode } from "react-icons/fa";
import { BiLogoSpringBoot } from "react-icons/bi";
import { SiExpress } from "react-icons/si";
import { animate, motion } from "framer-motion";

const iconVariable = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Languages = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <h2 className="my-20 text-center text-4xl">Tech Stack</h2>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: 100 }}
        transition={{ duration: 0.5 }}
        className="flex flex-wrap items-center justify-center gap-4"
      >
        <motion.div
          variants={iconVariable(2)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <TbBrandCpp className="text-7xl text-white-400" />
        </motion.div>
        <motion.div
          variants={iconVariable(3.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <FaJava className="text-7xl text-blue-400" />
        </motion.div>
        <motion.div
          variants={iconVariable(2.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <IoLogoJavascript className="text-7xl text-yellow-400" />
        </motion.div>
        <motion.div
          variants={iconVariable(2)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <TbSql className="text-7xl text-white-400" />
        </motion.div>
        <motion.div
          variants={iconVariable(3.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <FaReact className="text-7xl" style={{ color: "#61DBFB" }} />
        </motion.div>
        <motion.div
          variants={iconVariable(1.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <RiNextjsFill className="text-7xl" style={{ color: "#050000" }} />
        </motion.div>
        <motion.div
          variants={iconVariable(1.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <RiTailwindCssFill className="text-7xl" style={{ color: "#06b6d4" }} />
        </motion.div>
        <motion.div
          variants={iconVariable(3)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <FaNode className="text-7xl" style={{ color: "#68A063" }} />
        </motion.div>
        <motion.div
          variants={iconVariable(4)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <BiLogoSpringBoot className="text-7xl text-green-600" />
        </motion.div>
        <motion.div
          variants={iconVariable(1.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiExpress className="text-7xl" style={{ color: "#303030" }} />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Languages;
