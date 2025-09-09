import Hero from "../Components/Hero/Hero";
import Navbar from "../Components/Navbar/Navbar";
import About from "../Components/About/About"
import Footter from "../Components/Footter/Footter";
import Team from "../Components/Team/Team";

function HomePage(){
    return(
        <>
            <Navbar />
            <Hero />
            <About />
            <Team />
            <Footter />
        </>
    )
}
export default HomePage;