import banner from "../../assets/Images/My W-bg pic/new_hero.png";
// import "./Hero.scss"
const Hero = () => {
  return (
    <div className="lg:flex lg:justify-evenly ">
      <div className="  lg:flex lg:flex-col lg:justify-center lg:w-1/2  p-4 text-center px-8">
        <h2 className="lg:text-3xl">Hello,</h2>
        <h2 className=" lg:text-7xl text-4xl">
          I am <span className="text-cyan-400/100">Shakil</span>
        </h2>
        <p className=" font-bold md:text-2xl">
          {" "}
          Front-End Developer | Cyber Security Analyst
        </p>
        <p className=" mt-4">
          My expertise lies in seamlessly transforming designs from PSD, XD, and
          Figma to HTML, ensuring every detail is faithfully translated to <span className=" text-cyan-700 font-bold">CODE</span>.
          I am all about delivering websites that not only look great but also
          function flawlessly. ⚛️ I am well-versed in modern web technologies
          like REACT, JavaScript, Tailwind CSS, Bootstrap, and DaisyUI. 🌐 Let s
          collaborate to bring your web ideas to life.
        </p>
      </div>
      <figure className=" lg:w-1/2 lg:h-screen">
        <img className=" lg:w-full" src={banner} alt="Album" />
      </figure>
    </div>
  );
};

export default Hero;
