import Projects from "../Components/Projects/Projects";
import Skills from "../Components/Skills/Skills";
import "../../src/app.scss"
import Hero from "./Hero/Hero";
import ContactMe from "../Components/ContactMe/ContactMe";
import AboutMe from "../Components/AboutMe/AboutMe";

const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <Skills></Skills>
            <Projects></Projects>
            <ContactMe></ContactMe>
            <AboutMe></AboutMe>
        </div>
    );
};

export default Home;