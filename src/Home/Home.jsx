import Projects from "../Components/Projects/Projects";
import Skills from "../Components/Skills/Skills";
import Banner from "./Banner/Banner";

const Home = () => {
    return (
        <div className=" bg-[#0A2647] text-white">
            <Banner></Banner>
            <Skills></Skills>
            <Projects></Projects>
        </div>
    );
};

export default Home;