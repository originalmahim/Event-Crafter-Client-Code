// import { useContext } from "react";
import Banner from "../../Banner/Banner";
import Pricing from "../../Pricing/Pricing";
// import Reviews from "../../Reviews/Reviews";
import Services from "../../Services/Services";
import TeamSection from "../../TeamSection/TeamSection";





const Home = () => {
          
          return (
          <div>
          <Banner></Banner>
          <Services></Services>
          {/* <Reviews></Reviews> */}
          <Pricing></Pricing>
          <TeamSection></TeamSection>
          </div>
          );
};

export default Home;