






import Statics from "../StatisTics/Statics";
import Banner from './../Banner/Banner';
import Pricing from './../Pricing/Pricing';
import Reviews from './../Reviews/Reviews';
import Services from './../Services/Services';
import TeamSection from './../TeamSection/TeamSection';





const Home = () => {
          
          return (
          <div>
          <Banner></Banner>
          <Statics></Statics>
          <Services></Services>
          <Reviews></Reviews>
          <Pricing></Pricing>
          <TeamSection></TeamSection>
          </div>
          );
};

export default Home;