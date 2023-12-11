// import banner from "../../assets/Images/My W-bg pic/new-banner.png";
// import { motion } from "framer-motion";
// import "./Banner.scss";

// const textVariants = {
//   initial: {
//     x: -500,
//     opacity: 0,
//   },
//   animate: {
//     x: 0,
//     opacity: 1,
//     transition: {
//       duration: 1,
//       staggerChildren: 0.1,
//     },
//   },
// };
// const sliderVariants ={
//     initial:{
//       x:0,
//     },
//     animate:{
//         x:"-200%",
//         transition:{
//           repeat: Infinity,
//           repeatType:"mirror",
//           duration:20,
//         },
//     },
// };

// const Banner = () => {
//   return (
//     <section>
//       <motion.div
//         initial="initial"
//         animate="animate"
//         className=" pt-12  h-screen justify-center  items-center"
//       >
//         <div className="lg:flex grid grid-cols-1 heroContainer lg:h-[750px]">
//           <motion.div
//             className=" w-1/2 -ml-40 lg:ml-0 text-center "
//             variants={textVariants}
//           >
//             <motion.h2
//               variants={textVariants}
//               className=" text-xl lg:text-5xl "
//             >
//               Hello<span className="text-green-300">......</span>
//             </motion.h2>
//             <motion.h1
//               variants={textVariants}
//               className="mb-2 text-2xl lg:text-7xl font-bold"
//             >
//               I am{" "}
//               <motion.span
//                 variants={textVariants}
//                 className=" text-cyan-400/100"
//               >
//                 Shakil
//               </motion.span>
//             </motion.h1>
//             <motion.h2
//               variants={textVariants}
//               className="text-lg mb-2 font-bold"
//             >
//               Front-End Developer | Cyber Security Analyst
//             </motion.h2>
//             <motion.p variants={textVariants} className="mb-5">
//               🌐 Lets collaborate to bring your web ideas to life.
//             </motion.p>
//             <motion.button
//               variants={textVariants}
//               whileHover={{ scale: 1.1 }}
//               className="btn -ml-32 mt-4 lg:-mt-4 absolute btn-outline btn-info"
//             >
//               Checkout My Resume
//             </motion.button>
//           </motion.div>
//           <motion.div 
//           variants={sliderVariants} initial="initial" animate="animate"
//           className=" slidingText hidden lg:visible">
//             MERN Stack Developer
//           </motion.div>
//           <motion.div
//             variants={textVariants}
//             className=" flex justify-end h-auto"
//           >
//             <motion.img
//               variants={textVariants}
//               // whileHover={{ scale: 1.1 }}
//               className=" w-full h-full lg:w-[1680px]"
//               src={banner}
//               alt="Shakil"
//             />
//           </motion.div>
//         </div>
//       </motion.div>
//     </section>
//   );
// };

// export default Banner;
