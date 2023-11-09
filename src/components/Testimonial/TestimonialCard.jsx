import { Link } from "react-router-dom";


const TestimonialCard = ({ testimonial }) => {
      const { image_url, customer_name, description,date } = testimonial;
      return (
            <Link to={``}>

                  <div className="flex mx-w-96 flex-col rounded-xl shadow-md" data-aos="flip-right">
                        <img
                              className="w-full h-[250px] rounded-2xl"
                              src={image_url}
                              alt="image-testimonial"
                        />
                        <div className={`p-4 bg-opacity-20`}>
                        <h5 className={`mt-2 text-xl font-semibold`}>
                                    {customer_name}
                              </h5>
                              <p className="text-base ">{description.slice(0, 50)}...</p>
                              <p className="text-base text-teal-700">{date}</p>
                        </div>

                  </div>
            </Link>
      );
};

export default TestimonialCard;