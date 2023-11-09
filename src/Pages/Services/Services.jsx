import { useQuery } from "@tanstack/react-query";
import useTitle from "../../hooks/useTitle";
import AllServices from "../../components/Cards/ServiceCard";
import { useState } from "react";
import { getServices } from "../../api/Services";


const Services = () => {
      useTitle("Services");
      const { data: servicesData = [], isLoading, refetch } = useQuery({
            queryKey: ['serviceData'],
            queryFn: async () => {
                  const data = await getServices();
                  return data
            }
      })

      const [searchTerm, setSearchTerm] = useState('');

      if (isLoading) {
            return <h1>Loading</h1>;
      }

      const filteredServices = servicesData.filter((service) =>
            service.title && service.title.toLowerCase().startsWith(searchTerm)

      );

      const handleSearchChange = (e) => {
            e.preventDefault()
            setSearchTerm(e.target.value.toLowerCase());
      };

      refetch()

      return (
            <div className="lg:w-10/12 mx-auto py-6 px-2 lg:py-10"data-aos="zoom-in-right">
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
                        {
                              filteredServices.slice(0, 6).map(service => <AllServices key={service.id} service={service}></AllServices>)
                        }
                  </div>

                  <div className="text-center">
                        <button className="btn btn-primary">More</button>
                  </div>

            </div>
      );
};

export default Services;
