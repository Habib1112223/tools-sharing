import React, { useState } from 'react'
import { useLoaderData } from 'react-router-dom'
import BookingModal from '../../components/Modals/Booking';
import { useQuery } from '@tanstack/react-query';
import { getServicesByEmail } from '../../api/Services';
import ServiceCard from '../../components/Cards/ServiceCard';

const ServicePage = () => {
  const service = useLoaderData();
  let [isOpen, setIsOpen] = useState(false)
  const { _id, title, image, providerName, email, providerImage, description, price, serviceArea } = service;


  const closeModal = () => {
    setIsOpen(false)
  }

  const openModal = () => {
    setIsOpen(true)
  }


  const { data: servicesData = [], isLoading } = useQuery({
    queryKey: ['serviceData'],
    queryFn: async () => {
      const data = await getServicesByEmail(email);
      return data;
    },
  });

  console.log(servicesData);

  return (
    <div className='lg:w-10/12 mx-auto py-10'>
      <div className='lg:w-8/12 mx-auto'>
      <div>
        <img className='w-full' src={image} alt="image" />
        <p className='text-5xl font-bold mt-4 mb-2'>{title}</p>
        <p className='text-2xl mb-2'>{description}</p>
        <p> <span className='text-xl'> Email:</span>{email}</p>
        <p className='text-xl'>Price:{price}</p>
        <p className='text-xl'>Area:{serviceArea}</p>
        <div className='flex gap-3 mt-4'>
          <img className='w-8 h-8 rounded-full' src={providerImage} alt="" />
          <h2 className='font-semibold'>{providerName}</h2>
        </div>
      </div>
      <div>
        <div className="py-5">
          <button
            type="button"
            onClick={openModal}
            className="bg-blue-500 text-white rounded-md px-4 py-2 mt-2 hover:bg-blue-600"
          >
            Booking Now
          </button>
        </div>
        <BookingModal
          isOpen={isOpen}
          closeModal={closeModal}
          service={service}
        ></BookingModal>
      </div>
      </div>
      {
      servicesData.length > 0 &&
        <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-5 mt-10'>
        {servicesData.slice(0, 3).map((service) => (
                <ServiceCard key={service.id} service={service} />
              ))}
        </div>
      }
    </div>
  )
}

export default ServicePage