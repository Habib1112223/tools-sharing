import { useQuery } from '@tanstack/react-query';
import React from 'react'
import HomeServiceCard from '../Cards/HomeServiceCard';
import { Link } from 'react-router-dom';
import { getServices } from '../../api/Services';
import Loading from '../Loading/Loading';

const HomeServices = () => {
    const { data: servicesData = [], isLoading, refetch } = useQuery({
        queryKey: ['serviceData'],
        queryFn: async () => {
            const data = await getServices();
            return data
        }
    })

    if (isLoading) {
        return <Loading></Loading>;
    }


    refetch()

    return (
        <div className="lg:w-10/12 mx-auto py-6 px-2 lg:py-20">
             <h2 className="text-accent text-center text-4xl font-extrabold uppercase">Services</h2>
            <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-5 mt-20">
                {
                    servicesData.slice(0, 4).map(service => <HomeServiceCard key={service._id} service={service}></HomeServiceCard>)
                }
            </div>
            <div className="text-center py-6">
                <button className='bg-blue-500 text-white rounded-md px-4 py-2 hover:bg-blue-600'><Link to='/services'>Show All</Link></button>
            </div>

        </div>
    );
}

export default HomeServices