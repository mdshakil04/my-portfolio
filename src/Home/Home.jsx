import Projects from "../Components/Projects/Projects";
import Skills from "../Components/Skills/Skills";
import "../../src/app.scss"
import Hero from "./Hero/Hero";
import ContactMe from "../Components/ContactMe/ContactMe";
import AboutMe from "../Components/AboutMe/AboutMe";

const Home = () => {
    return (
        <div className="static pt-16 bg-[#F7FBFC]">
            <Hero></Hero>
            <Skills></Skills>
            <Projects></Projects>
            <AboutMe></AboutMe>
            <ContactMe></ContactMe>
        </div>
    );
};
// #F3F8FF #E1F7F5
export default Home;