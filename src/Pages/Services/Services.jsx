import { useQuery } from "@tanstack/react-query";
import useTitle from "../../hooks/useTitle";
import AllServices from "../../components/Cards/ServiceCard";
import { useState } from "react";
import { getServices } from "../../api/Services";
import Loading from "../../components/Loading/Loading";

const Services = () => {
      useTitle('Services');
      const { data: servicesData = [], isLoading } = useQuery({
        queryKey: ['serviceData'],
        queryFn: async () => {
          const data = await getServices(); // Assuming getServices is a valid function
          return data;
        },
      });
    
      const [searchTerm, setSearchTerm] = useState('');
      const initialItemsToShow = 6;
      const [showAll, setShowAll] = useState(false);
    
      if (isLoading) {
        return <Loading></Loading>;
      }
    
      const filteredServices = servicesData.filter((service) =>
        service.title && service.title.toLowerCase().startsWith(searchTerm)
      );
    
      const handleSearchChange = (e) => {
        setSearchTerm(e.target.value.toLowerCase());
      };
    
      return (
        <div className="lg:w-10/12 mx-auto py-6 px-2 lg:py-10" data-aos="zoom-in-right">
          <div className="mb-10 w-6/12 mx-auto">
            <input
              type="text"
              placeholder="Search services"
              value={searchTerm}
              onChange={handleSearchChange}
              className="border border-gray-300 p-2 rounded-md w-full"
            />
          </div>
          <h2 className="text-accent text-center text-4xl font-extrabold uppercase mb-6">All Services</h2>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-5">
            {filteredServices.slice(0, showAll ? filteredServices.length : initialItemsToShow).map((service) => (
              <AllServices key={service._id} service={service} />
            ))}
          </div>
    
          <div className="text-center mt-10">
            {filteredServices.length > initialItemsToShow && (
              <button className="text-base px-7 py-2 rounded-md bg-[#009444] text-white" onClick={() => setShowAll(!showAll)}>
                {showAll ? 'Show Less' : 'More'}
              </button>
            )}
          </div>
        </div>
      );
    };
    
    export default Services;
