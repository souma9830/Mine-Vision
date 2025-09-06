import Hero from "../Components/Hero/Hero";
import Navbar from "../Components/Navbar/Navbar";
import About from "../Components/About/About"
import Footter from "../Components/Footter/Footter";

function HomePage(){
    return(
        <>
            <Navbar />
            <Hero />
            <About />
            <Footter />
        </>
    )
}
export default HomePage;