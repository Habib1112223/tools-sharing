// import { useEffect, useState } from "react";
// import { useLoaderData } from "react-router-dom";
// import ServiceCard from "./ServiceCard";


// const SingleService = () => {

//       const category = useLoaderData();
//       const [services, setServices] = useState(null)
//       const { _id, title, slider_image } = category;
  
//       useEffect(() => {
//           fetch(`https://y-rust-psi.vercel.app/category-services/${_id}`)
//               .then(res => res.json())
//               .then(data => setServices(data))
//       }, [])
  
//       return (
//             <div className='w-full'>
//             <div className='w-10/12 mx-auto p-6'>
//             <h1 className='text-3xl text-center'>{title}</h1>
//             <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 my-20'>
//                 {
//                     services?.map(service => {
//                         return <ServiceCard key={service._id} service={service}></ServiceCard>
//                     })
//                 }
//             </div>
//             </div>
//         </div>
//       );
// };

// export default SingleService;