import React, { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import { Link } from 'react-router-dom';

const HomeServiceCard = ({service}) => {
    const {user} = useContext(AuthContext)
    const {_id, title, image, providerName, providerEmail, providerImage, description, price, serviceArea} = service;

    return (
      <div className="">
              <article className="overflow-hidden rounded-lg shadow-lg">
                    <img alt="Placeholder" className="block h-[300px] w-full" src={image}/>
  
                  <header className="leading-tight p-2 md:p-4">
                      <h2 className="text-2xl font-bold py-2">
                        {title}
                      </h2>
                      <p className='py-2 text-gray-500'>{description.slice(0, 90)}</p>
                      <div className='flex justify-between'>
                      <p className='text-xl'>Price: ${price}</p>
                      <p className='text-xl'>{serviceArea}</p>
                      </div>
                  </header>
  
                  <footer className="flex items-center justify-between leading-none p-2 md:p-4">
                      <a className="flex items-center no-underline hover:underline text-black" href="#">
                          <img alt="Placeholder" className="w-10 h-10 rounded-full" src={providerImage}/>
                          <p className="ml-2 text-sm">
                              {providerName}
                          </p>
                      </a>
                      {
                        user?.uid ? <Link to={`/services/${_id}`}>
                        <button className='bg-blue-500 text-white rounded-md px-4 py-2 hover:bg-blue-600'>View Details</button>
                      </Link>:   <Link to={`/login`}>
                        <button className='bg-blue-500 text-white rounded-md px-4 py-2 hover:bg-blue-600'>View Details</button>
                      </Link>                   }
                  </footer>
  
              </article>
  
          </div>
    )
}

export default HomeServiceCard