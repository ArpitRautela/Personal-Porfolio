import { TbBrandCpp } from "react-icons/tb";
import { FaJava } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { TbSql } from "react-icons/tb";
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

const Languages = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
        <h2 className="my-20 text-center text-4xl">Languages</h2>
        <motion.div 
             whileInView={{ opacity : 1,x:0 }}
             initial = {{opacity: 0 ,x:100}}
             transition={{duration: 0.5}}
              className="flex flex-wrap items-center justify-center gap-4">
            <motion.div
            variants={iconVariable(2)}
            initial="initial"
            animate="animate"
             className="rounded-2xl border-4 border-neutral-800 p-4">
                <TbBrandCpp className="text-7xl text-white-400" />
            </motion.div>
            <motion.div
            variants={iconVariable(3.5)}
            initial="initial"
            animate="animate"
             className="rounded-2xl border-4 border-neutral-800 p-4">
                <FaJava className="text-7xl text-blue-400" />
            </motion.div>
            <motion.div
            variants={iconVariable(2.5)}
            initial="initial"
            animate="animate"
             className="rounded-2xl border-4 border-neutral-800 p-4">
                <IoLogoJavascript className="text-7xl text-yellow-400" />
            </motion.div>
            <motion.div
            variants={iconVariable(3.5)}
            initial="initial"
            animate="animate"
             className="rounded-2xl border-4 border-neutral-800 p-4">
            <FaHtml5 className="text-7xl" style={{ color: '#E34F26' }} />
            </motion.div>
            <motion.div
            variants={iconVariable(1.5)}
            initial="initial"
            animate="animate"
             className="rounded-2xl border-4 border-neutral-800 p-4">
            <FaCss3Alt className="text-7xl" style={{ color: '#1572B6' }} />
            </motion.div>
            <motion.div
            variants={iconVariable(2)}
            initial="initial"
            animate="animate"
             className="rounded-2xl border-4 border-neutral-800 p-4">
                <TbSql className="text-7xl text-white-400" />
            </motion.div>
        </motion.div>
    </div>
  )
}

export default Languages
