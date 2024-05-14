// import banner from "../../assets/Images/My W-bg pic/new_hero.png";
// import "./Hero.scss"
import banner2 from "../../assets/Images/My W-bg pic/Banner-bg.png";
const Hero = () => {
  return (
    <div className="hero min-h-screen ">
      <div className="hero-content flex-col lg:flex-row-reverse lg:h-[600px] ">
        <img src={banner2} className="min-h-screen  lg:-mt-36" />
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
        </div>
      </div>
    </div>
  );
};
{
  /* <p className=" mt-4">
My expertise lies in seamlessly transforming designs from PSD, XD, and
Figma to HTML, ensuring every detail is faithfully translated to <span className=" text-cyan-700 font-bold">CODE</span>.
I am all about delivering websites that not only look great but also
function flawlessly. ⚛️ I am well-versed in modern web technologies
like REACT, JavaScript, Tailwind CSS, Bootstrap, and DaisyUI. 🌐 Let s
collaborate to bring your web ideas to life.
</p> */
}

export default Hero;
