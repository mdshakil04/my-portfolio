import banner from "../../assets/Images/Banner/Banner-bg.png";
// import "./Hero.scss"
const Hero = () => {
  return (
    <div className="hero min-h-screen ">
      <div className="hero-content flex-col lg:flex-row-reverse lg:h-[600px] ">
        <img src={banner} className="min-h-screen  lg:-mt-36" />
        <div className=" ">
          <h1 className="text-5xl font-bold">
            Front End Developer<br/>React Developer<br/> Ethical Hacker
          </h1>
          <p className="py-6">
            My expertise lies in seamlessly transforming designs from PSD, XD,
            and Figma to HTML, ensuring every detail is faithfully translated to{" "}
            <span className=" text-cyan-700 font-bold">CODE</span>. I am all
            about delivering websites that not only look great but also function
            flawlessly. ⚛️ I am well-versed in modern web technologies like
            REACT, JavaScript, Tailwind CSS, Bootstrap, and DaisyUI. 🌐 Let s
            collaborate to bring your web ideas to life.
          </p>
          <a href="https://drive.google.com/file/d/16B9DIT8j74L4zplGi0Tto8pweM-sHKWw/view?usp=sharing" download target="blank"  className="btn btn-sm btn-outline w-auto btn-info">Download My Resume</a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
