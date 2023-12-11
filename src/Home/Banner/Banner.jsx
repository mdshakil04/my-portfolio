import banner from "../../assets/Images/My W-bg pic/My-pic (3).png"
const Banner = () => {
  return (
    <div
      className=" pt-12"
      style={{
        backgroundImage:
          "url(https://i.pinimg.com/originals/5f/00/96/5f009674bb012f8e26ea43dad4abdd00.gif)",
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className=" container mx-auto md:flex md:justify-center items-center text-center text-neutral-content">
        <div className=" md:w-1/2 ">
            <h2 className=" text-3xl mdtext-5xl">Hello,</h2>
          <h1 className="mb-2 text-5xl md:text-7xl font-bold"> I'm Shakil</h1>
          <h2 className="text-2xl mb-2 font-bold">Front-End Developer | Cyber Security Analyst</h2>
          <p className="mb-5">
             My expertise lies in seamlessly transforming designs from PSD, XD, and Figma to HTML, ensuring every detail is faithfully translated to CODE. I'm all about delivering websites that not only look great but also function flawlessly. ⚛️ I'm well-versed in modern web technologies like REACT, JavaScript, Tailwind CSS, Bootstrap, and DaisyUI. "🌐 Let's collaborate to bring your web ideas to life"
          </p>
          <button className="btn btn-outline btn-info">Checkout My Resume</button>
        </div>
        <div className=" md:w-1/2 ">
            <img src={banner} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
