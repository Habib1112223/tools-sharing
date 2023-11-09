import Pricing from "../../components/Pricing/Pricing";
import HomeServices from "../../components/Services/HomeServices";
import Testimonial from "../../components/Testimonial/Testimonial";
import useTitle from "../../hooks/useTitle";
import Accordion from "./Accordion/Accordion";
import Slider from "./Slider/Slider";


const Home = () => {
      useTitle('Home')
      return (
            <div>
                  <Slider></Slider>
                  <HomeServices></HomeServices>
                  <Pricing></Pricing>
                  <Testimonial></Testimonial>
                  <Accordion></Accordion>
            </div>
      );
};

export default Home;
