import  { useEffect, useState } from 'react'
import TestimonialCard from './TestimonialCard'


const Testimonial = () => {
  const [testimonials, setTestimonials] = useState([])


  useEffect(() => {
    fetch('testimonial.json')
      .then(res => res.json())
      .then(data => setTestimonials(data))
  }, [])

  console.log(testimonials)
  return (

    <div className="lg:py-10 py-5 px-2 lg:px-0 lg:w-9/12 mx-auto mt-12 mb-12" >
      <div className="m-[10px]">
        <h2 className="text-3xl text-center font-bold text-teal-700"> Our Customer Testimonial</h2>
        <div className="mt-4 mb-4">
          <p className="text-lg text-slate-400 font-semibold text-center mb-12">If you show customer testimonial,Can take idea of the customers</p>
        </div>
      </div>


      <div className='grid lg:grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-5'>
        {

          testimonials?.map(testimonial => <TestimonialCard key={testimonial.id} testimonial={testimonial}></TestimonialCard>)
        }
      </div>
    </div>


  )
}

export default Testimonial;