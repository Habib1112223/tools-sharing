
import React, { useContext } from 'react'
import { getServicesByEmail } from '../../api/Services';
import { useQuery } from '@tanstack/react-query';
import { AuthContext } from '../../Providers/AuthProvider';
import ManageServiceCard from '../../components/Cards/ManageServiceCard';
import Loading from '../../components/Loading/Loading';

const ManageService = () => {
  const {user} = useContext(AuthContext);

  const { data: servicesData = [], isLoading, refetch } = useQuery({
    queryKey: ['serviceData'],
    queryFn: async () => {
      const data = await getServicesByEmail(user?.email); 
      return data;
    },
  });

  if(isLoading){
    return <Loading/>
  }

  console.log(servicesData);

  return (
    <div className='lg:w-10/12 mx-auto py-10'>
      <h2 className="text-accent text-center text-4xl font-extrabold uppercase mb-10">Manage Services</h2>
          {servicesData.length > 0 ? <div className="flex flex-col gap-10">
            {servicesData.map((service) => (
              <ManageServiceCard key={service._id} service={service} refetch={refetch}/>
            ))}
          </div>:
          <h2 className='text-center text-3xl text-red-700 font-bold'>No Services Found <br />
          <span className='text-3xl font-bold text-blue-700 text-center'> Please Add a Service</span></h2>
          }

    </div>
  )
}

export default ManageService;