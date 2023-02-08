// import "../routes/Home.css";
import Navbar from "../navbar/Navbar";
import HomeHero from "./HomeHero";
import HeroImg from "../Images/ice cream.jpg";
import Nextimg from "../Images/icePNG.jpg";
import Dish from "../Dish";
import Items from "../Items";
// import Catering from "./Catering";
import Catering1 from "../Catering1";
import Community from "../community";
import Footer from "../Footer";

function Home() {
  return (
    <>
      <Navbar />
      <HomeHero
        cName="Hero"
        Heroimg={HeroImg}
        title=" ICE CREAM"
        title1=" I scream You scream We all scream for ice cream"
        buttonText="Show Menu"
        buttonText1="Order Now"
        url="/"
        btnClass="show"
        Nextimg={Nextimg}
      />
      <Dish />
      <Items />
      <Catering1 />
      <Community />
      <Footer />
    </>
  );
}

export default Home;
