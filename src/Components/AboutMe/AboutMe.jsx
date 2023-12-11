// import banner from "../../assets/Images/My W-bg pic/new-banner.png";
const AboutMe = () => {
  return (
    <section>
      <div className="card   h-screen ">
        <div className=" text-center p-24 px-32">
          <h2 className="lg:text-3xl">Hello,</h2>
          <h2 className=" lg:text-7xl text-4xl">
            I am <span className="text-cyan-400/100">Shakil</span>
          </h2>
          <p className=" font-bold md:text-2xl">
            {" "}
            Front-End Developer | Cyber Security Analyst
          </p>
          <p className=" mt-4">
            My expertise lies in seamlessly transforming designs from PSD, XD,
            and Figma to HTML, ensuring every detail is faithfully translated to
            CODE. I am all about delivering websites that not only look great but
            also function flawlessly. ⚛️ I am well-versed in modern web
            technologies like REACT, JavaScript, Tailwind CSS, Bootstrap, and
            DaisyUI. 🌐 Let s collaborate to bring your web ideas to life
          </p>
          <div>
            <button className="btn btn-outline mt-4 btn-info">
              Checkout My Resume
            </button>
          </div>
        </div>
        {/* <figure className=" lg:w-2/3">
          <img src={banner} alt="Album" />
        </figure> */}
      </div>
    </section>
  );
};

export default AboutMe;
