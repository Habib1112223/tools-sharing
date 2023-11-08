import React from 'react'
import { useLoaderData } from 'react-router-dom'

const ServicePage = () => {
    const service = useLoaderData();
    console.log(service)
  return (
    <div>ServicePage</div>
  )
}

export default ServicePage