import About from "./About";
import Availabletoy from "./Availabletoy";
import Banner from "./Banner";
import Contact from "./Contact";
import Gallery from "./Gallery";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Gallery></Gallery>
      <Availabletoy></Availabletoy>
      <About></About>
      <Contact></Contact>
    </div>
  );
};

export default Home;
