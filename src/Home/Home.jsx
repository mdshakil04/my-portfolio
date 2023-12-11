import Projects from "../Components/Projects/Projects";
import Skills from "../Components/Skills/Skills";
import Banner from "./Banner/Banner";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Skills></Skills>
            <Projects></Projects>
        </div>
    );
};

export default Home;