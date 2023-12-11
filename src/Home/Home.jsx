import Projects from "../Components/Projects/Projects";
import Skills from "../Components/Skills/Skills";
import "../../src/app.scss"
import Hero from "./Hero/Hero";

const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <Skills></Skills>
            <Projects></Projects>
        </div>
    );
};

export default Home;