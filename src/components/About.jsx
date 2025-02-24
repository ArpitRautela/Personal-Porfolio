import aboutImg from "../assets/about1.jpg";
import { ABOUT_TEXT } from "../constants/index";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 pt-8">
      <h2 className="my-20 text-center text-4xl">
        About<span className="text-neutral-500"> Me</span>
      </h2>
      <div className="flex flex-wrap">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/3 lg:p-8"
        >
          <div className="flex items-center justify-center">
            <img
              src={aboutImg}
              alt="about"
              width="400"
              height="350"
              className="rounded-2xl"
            />
          </div>
        </motion.div>
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-2/3"
        >
          <div className="flex justify-center lg:justify-start">
            <p className="my-2 w-full lg:max-w-3xl py-6 whitespace-pre-line leading-relaxed text-justify">
              {ABOUT_TEXT}
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
