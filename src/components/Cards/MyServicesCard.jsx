import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';

const MyServicesCard = ({ service }) => {
    const { _id, title, image, providerName, providerEmail, providerImage, description, price, serviceArea } = service;

    return (
        <div className="">
            <article className="flex gap-5 overflow-hidden rounded-lg shadow-lg mb-4">


                <img alt="Placeholder" className="block h-[200px] rounded-xl ml-24 w-1/4" src={image} />

                <div>
                    <h2 className="text-2xl font-bold py-2">
                        {title}
                    </h2>
                    <p className='py-2 text-gray-500'>{description?.slice(0, 70)}</p>
                    <div className='flex justify-between'>
                        <p className='text-xl'>Price: ${price}</p>
                        <p className='text-xl'>{serviceArea}</p>
                    </div>
                    <a className="flex items-center no-underline hover:underline text-black" href="#">
                        <img alt="Placeholder" className="w-10 h-10 rounded-full" src={providerImage} />
                        <p className="ml-2 text-sm">
                            {providerName}
                        </p>
                    </a>
                </div>

            </article>

        </div>
    )
}

export default MyServicesCard;