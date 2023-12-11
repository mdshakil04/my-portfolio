import banner from "../../assets/Images/My W-bg pic/My-pic (1).png";
import { motion } from "framer-motion";
import "./Banner.scss";

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Banner = () => {
  return (
    <section>
      <motion.div
        initial="initial"
        animate="animate"
        className=" pt-12 h-screen justify-center  items-center"
      >
        <div className="flex hero lg:h-[750px]">
          <motion.div
            className="  w-1/2 text-center "
            variants={textVariants}
          >
            <motion.h2
              variants={textVariants}
              className=" text-2xl md:text-5xl "
            >
              Hello<span className="text-green-300">......</span>
            </motion.h2>
            <motion.h1
              variants={textVariants}
              className="mb-2 text-3xl md:text-7xl font-bold"
            >
              I am{" "}
              <motion.span
                variants={textVariants}
                className=" text-cyan-400/100"
              >
                Shakil
              </motion.span>
            </motion.h1>
            <motion.h2
              variants={textVariants}
              className="text-2xl mb-2 font-bold"
            >
              Front-End Developer | Cyber Security Analyst
            </motion.h2>
            <motion.p variants={textVariants} className="mb-5">
              🌐 Lets collaborate to bring your web ideas to life.
            </motion.p>
            <motion.button
              variants={textVariants}
              whileHover={{ scale: 1.1 }}
              className="btn btn-outline btn-info"
            >
              Checkout My Resume
            </motion.button>
          </motion.div>
          <motion.div variants={textVariants} className=" slidingText">
            MERN Stack Developer
          </motion.div>
          <motion.div
            variants={textVariants}
            className=" w-1/2 flex justify-end lg:h-[750px]"
          >
            <motion.img
              variants={textVariants}
              // whileHover={{ scale: 1.1 }}
              className=" "
              src={banner}
              alt="Shakil"
            />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Banner;
