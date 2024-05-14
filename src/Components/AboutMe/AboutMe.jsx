import { motion } from "framer-motion";
import banner from "../../assets/Images/Banner/Banner-bg.png";
const AboutMe = () => {
  return (
    <section className=" h-auto mb-12">
      <h2 className="md:text-6xl text-3xl text-center my-8">My Qualifications<span className=" text-7xl text-cyan-400">..</span></h2>
      <motion.div 
      whileHover={{
        scale:1.05,
        boxShadow:"0px 0px 8px rgb(255,255,255)",
      }}
      className="card h-auto container mx-auto  ">
        <div className="card card-side ">
          <div className=" p-4 lg:mt-8">
            <h2 className=" text-4xl border-b-2 w-1/5">Educations </h2>
            <p className=" text-xl ml-4 my-4">I have completed my Post-graduation degree from the National University of Bangladesh majoring in <span className="font-bold text-cyan-500"> Physics</span>.</p>
            <h2 className=" text-4xl border-b-2 w-1/5">Web Development </h2>
            <p className=" text-xl ml-4 my-4">I have completed Web Development Course from Programming Hero in 2021. My student ID is <span className=" text-cyan-500 font-bold">WEB4-1059</span> </p>
            <h2 className=" text-4xl border-b-2 w-1/5">Cyber Security </h2>
            <p className=" text-xl ml-4 my-4">I have completed Cyber Security Course from ARENA WEB SECURITY in 2022. My verification no is <span className=" text-cyan-500 font-bold"> V-A38W2109S20</span></p>
          </div>
          <figure className=" w-1/4">
            <img
            className=" h-full"
              src={banner}
              alt="Banner"
            />
          </figure>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutMe;
