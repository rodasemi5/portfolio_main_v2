import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import { github, resume } from "../assets";
import {myGithub } from "../constants";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className='text-[#915EFF]'>Rodrigo</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I develop web applications, user <br className='sm:block hidden' />
            interfaces and databases
          </p>

          <div className="w-full flex flex-col items-center justify-center ">
      <p className="mt-24 text-secondary text-[21px] max-w-3xl leading-[30px] text-center">
            Check out my Github!
          </p>
        <div
          className="green-pink-gradient p-[10px] rounded-full flex justify-center items-center cursor-pointer mt-4"
          onClick={() => window.open(myGithub, "_blank")}
        >
          <div className="bg-tertiary rounded-full px-3 py-2 flex justify-evenly items-center">
          <img
                src={github}
                alt="source code"
                className="w-[40px] h-[40px] object-contain"
              />
          </div>
          <p className="text-[21px] ml-2">GitHub</p>
        </div>
        <div className=" w-full flex flex-col items-center justify-center">
        <p className="mt-24 text-secondary text-[21px] max-w-3xl leading-[30px] text-center">
            Download my Resume!
          </p>
          <a href={resume} download>
              <button className="bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary text-[21px] mt-10">
                Download Resume
              </button>
              </a>

        </div>
      </div>
        </div>
      </div>

      





{/* <ComputersCanvas /> */}

      {/* <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div> */}
    </section>
  );
};

export default Hero;