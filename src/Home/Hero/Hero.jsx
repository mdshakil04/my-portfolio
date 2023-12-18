import banner from "../../assets/Images/My W-bg pic/new_hero.png";
import "./Hero.scss"
const Hero = () => {
  return (
    <div className="card lg:card-side heroContainer h-screen ">
      <div className=" lg:w-1/2 flex flex-col justify-center md:pl-24 p-4 text-center px-8">
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
          Figma to HTML, ensuring every detail is faithfully translated to CODE.
          I am all about delivering websites that not only look great but also
          function flawlessly. ⚛️ I am well-versed in modern web technologies
          like REACT, JavaScript, Tailwind CSS, Bootstrap, and DaisyUI. 🌐 Let s
          collaborate to bring your web ideas to life
        </p>
        <div className=" mt-4">
       
        </div>
      </div>
      <figure className=" w-1/2  image-container">
        <img className="lg:w-2/3 md:mt-36 ml-12 mt-12" src={banner} alt="Album" />
      </figure>
    </div>
  );
};

export default Hero;
