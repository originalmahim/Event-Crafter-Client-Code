
import Banner from "../../Banner/Banner";
import Pricing from "../../Pricing/Pricing";

import Services from "../../Services/Services";
import TeamSection from "../../TeamSection/TeamSection";
import Statics from "../StatisTics/Statics";





const Home = () => {
          
          return (
          <div>
          <Banner></Banner>
          <Statics></Statics>
          <Services></Services>
          
          <Pricing></Pricing>
          <TeamSection></TeamSection>
          </div>
          );
};

export default Home;