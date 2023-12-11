import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../Providers/AuthProvider';
import MyScheduleCard from './MyScheduleCard';
import { useQuery } from '@tanstack/react-query';

const MySchedules = () => {
  const { user } = useContext(AuthContext)

  const { data: bookingsData = [], isLoading, refetch } = useQuery({
    queryKey: ['bookingData'],
    queryFn: async () => {
      const response = await fetch(`https://y-rust-psi.vercel.app/booking-by-email?email=${user?.email}`); 
      const data = await response.json();
      return data;
    },
  });


  return (
    <div className='w-10/12 mx-auto py-10'>
      <h1 className='text-2xl font-bold text-teal-700 text-center mb-8'>My Booking : {bookingsData?.length}</h1>
      
          {
            bookingsData?.length > 0 ?
           <>
            {
              bookingsData?.map((service) => {
                return <MyScheduleCard
                  key={service._id}
                  service={service}
                  refetch={refetch}
                ></MyScheduleCard>
              })
            }
           </>
            :
            <h2>No Booking Data Found</h2>
          }

    </div>
  )
}

export default MySchedules;
