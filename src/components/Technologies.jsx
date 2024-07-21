import { RiReactjsLine } from "react-icons/ri";
import { FaGitAlt } from "react-icons/fa";
import { BiLogoSpringBoot } from "react-icons/bi";
import { BiLogoPostgresql } from "react-icons/bi";
import { BiLogoNodejs } from "react-icons/bi";
import { SiMongodb } from "react-icons/si";
import { SiPostman } from "react-icons/si";
import { SiAdobepremierepro } from "react-icons/si";
import { animate, motion } from "framer-motion";

const iconVariable = (duration) => ({
    initial: { y: -10},
    animate : {
        y : [10,-10],
        transition : {
            duration : duration,
            ease : "linear",
            repeat : Infinity,
            repeatType: "reverse",
        },
    },
});

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
        <h2 className="my-20 text-center text-4xl">Technologies</h2>
        <motion.div
            whileInView={{ opacity : 1,x:0 }}
            initial = {{opacity: 0 ,x:-100}}
            transition={{duration: 0.5}}
             className="flex flex-wrap items-center justify-center gap-4">
            <motion.div
            variants={iconVariable(2)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <RiReactjsLine className="text-7xl text-cyan-400" />
            </motion.div>
            <motion.div
            variants={iconVariable(3)}
            initial="initial"
            animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
                <FaGitAlt className="text-7xl text-red-700" />
            </motion.div>
            <motion.div
            variants={iconVariable(2)}
            initial="initial"
            animate="animate" 
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <BiLogoSpringBoot className="text-7xl text-green-600" />
            </motion.div>
            <motion.div
            variants={iconVariable(2.5)}
            initial="initial"
            animate="animate"
             className="rounded-2xl border-4 border-neutral-800 p-4">
                <BiLogoPostgresql className="text-7xl text-blue-400" />
            </motion.div>
            <motion.div
            variants={iconVariable(3)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <BiLogoNodejs className="text-7xl text-green-500" />
            </motion.div>
            <motion.div
            variants={iconVariable(2.5)}
            initial="initial"
            animate="animate"className="rounded-2xl border-4 border-neutral-800 p-4">

                <SiMongodb className="text-7xl text-green-600" />
            </motion.div>
            <motion.div
            variants={iconVariable(3)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiPostman className="text-7xl text-orange-600" />
            </motion.div>
            <motion.div
            variants={iconVariable(2)}
            initial="initial"
            animate="animate"
             className="rounded-2xl border-4 border-neutral-800 p-4">
            <SiAdobepremierepro className="text-7xl" style={{ color: '#9999FF' }} />
            </motion.div>
        </motion.div>
    </div>
  )
}

export default Technologies
