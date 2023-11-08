import React from 'react'
import { Link } from 'react-router-dom'

const Pricing = () => {
    return (
        <div className='pricing w-10/12 mx-auto pb-10'>
            <h1 className="text-accent text-center">pricing</h1>
            <p className="fs-500 text-center">plans that work for everyone</p>
            <div className="grid lg:grid-cols-3 flow-content mt-20">
                <div className="plan p-5 rounded-md m plan--light">
                    <h2 className="plan-title">basic</h2>
                    <p className="plan-price">$4.99<span>/month</span></p>
                    <p className="plan-description">
                        Eleifend cursus volutpat risus convallis nam sed
                        quam sollicitudin eget leo at erat cursus justo
                    </p>
                    <Link to="#" className="bg-blue-500 text-white rounded-md px-4 py-2 hover:bg-blue-600">Join Now</Link>
                </div>

                <div className="plan p-5 rounded-md m plan--accent">
                    <h2 className="plan-title">super</h2>
                    <p className="plan-price">$19.99<span>/month</span></p>
                    <p className="plan-description">
                        Eleifend cursus volutpat risus convallis nam sed
                        quam sollicitudin eget leo at erat cursus justo
                    </p>
                    <Link to="#" className="bg-blue-500 text-white rounded-md px-4 py-2 hover:bg-blue-600">Join Now</Link>
                </div>

                <div className="plan p-5 rounded-md m plan--light">
                    <h2 className="plan-title">Enterprise</h2>
                    <p className="plan-price">$49.99<span>/month</span></p>
                    <p className="plan-description">
                        Eleifend cursus volutpat risus convallis nam sed
                        quam sollicitudin eget leo at erat cursus justo
                    </p>
                    <Link to="#" className="bg-blue-500 text-white rounded-md px-4 py-2 hover:bg-blue-600">Join Now</Link>
                </div>
            </div>
           <div className='text-center'>
           <p className="fs-500 mb">Need something different? No problem!</p>
            <Link to="#" className="bg-blue-500 text-white rounded-md px-4 py-2 hover:bg-blue-600">Get in touch</Link>
           </div>

        </div>
    )
}

export default Pricing