import { HERO_CONTENT } from "../constants/index";
import profilepic from "../assets/profile3.jpg";
import { motion } from "framer-motion";

const container = (delay) => ({
    hidden: { x: -100, opacity: 0 },
    visible: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 0.5,
            delay: delay,
        },
    },
});

const Hero = () => {
    return (
        <div>
            <div className="border-b border-neutral-900 pb-4 lg:mb-35">
                <div className="flex flex-wrap">
                    <div className="w-full lg:w-2/3">
                        <div className="flex flex-col items-center lg:items-start">
                            <motion.h1
                                variants={container(0)}
                                initial="hidden"
                                animate="visible"
                                className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl"
                            >
                                Arpit Rautela
                            </motion.h1>
                            <motion.span
                                variants={container(0.5)}
                                initial="hidden"
                                animate="visible"
                                className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3 xl tracking-tight text-transparent"
                            >
                                Full Stack Developer
                            </motion.span>
                            <motion.p
                                variants={container(1)}
                                initial="hidden"
                                animate="visible"
                                className="my-2 max-w-xl py-6 font-light tracking-tighter"
                            >
                                {HERO_CONTENT}
                            </motion.p>
                            <motion.a
                                href="https://drive.google.com/file/d/13Srz6b2lfNnm1pEjmNtD5-vW8-H1beBP/view?usp=sharing"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-6 inline-block px-6 py-3 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700 transition duration-300"
                                variants={container(1.5)}
                                initial="hidden"
                                animate="visible"
                            >
                                Download Resume
                            </motion.a>
                        </div>
                    </div>
                    <div className="w-full lg:w-1/3 lg:p-8">
                        <div className="flex justify-center">
                            <motion.img
                                initial={{ x: 100, opacity: 0 , y: 0 }}
                                animate={{ x: 0, opacity: 1 , y:75}}
                                transition={{ duration: 1, delay: 1.2 }}
                                src={profilepic}
                                alt="Arpit"
                                width="400"
                                height="350"
                                className="rounded-2xl"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
