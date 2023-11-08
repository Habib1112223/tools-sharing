import Pricing from "../../components/Pricing/Pricing";
import HomeServices from "../../components/Services/HomeServices";
import useTitle from "../../hooks/useTitle";
import Accordion from "./Accordion/Accordion";
import ServiceCall from "./ServiceCall/ServiceCall";
import Slider from "./Slider/Slider";


const Home = () => {
      useTitle('Home')
      return (
            <div>
                  <Slider></Slider>
                  <HomeServices></HomeServices>
                  <Pricing></Pricing>
                  <ServiceCall></ServiceCall>
                  <Accordion></Accordion>
            </div>
      );
};

export default Home;
