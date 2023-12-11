import React, { useContext } from 'react'
import { AuthContext } from '../../Providers/AuthProvider';
import { useQuery } from '@tanstack/react-query';
import { getServicesByEmail } from '../../api/Services';
import MyServicesCard from '../../components/Cards/MyServicesCard';

const MyServices = () => {
  const {user} = useContext(AuthContext);

  const { data: servicesData = [], isLoading } = useQuery({
    queryKey: ['serviceData'],
    queryFn: async () => {
      const data = await getServicesByEmail(user?.email); 
      return data;
    },
  });

  console.log(servicesData);

  return (
    <div className='lg:w-10/12 mx-auto py-10'>
      <h2 className="text-accent text-center text-4xl font-extrabold uppercase mb-10">My Services</h2>
          <div className="flex flex-col gap-5">
            {servicesData.map((service) => (
              <MyServicesCard key={service._id} service={service} />
            ))}
          </div>

    </div>
  )
}

export default MyServices;