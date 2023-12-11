import { useState } from "react";
import ServiceUpdateModal from "../Modals/ServiceUpdate";
import Swal from "sweetalert2";
import { deleteService } from "../../api/Services";



const ManageServiceCard = ({ service, refetch }) => {
    let [isOpen, setIsOpen] = useState(false)
    const { _id, title, image, providerName, email, providerImage, description, price, serviceArea } = service;


    const closeModal = () => {
        setIsOpen(false)
    }

    const openModal = () => {
        setIsOpen(true)
    }

    const handleDelete = (id) =>{
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                deleteService(id)
                    .then((data) => {
                        if (data.deletedCount > 0) {
                            Swal.fire('Deleted!', 'Your Cart has been deleted.', 'success');
                            refetch();
                        }
                    });
            }
        })
    }

    return (
        <div className="shadow-md border-gray-300">
            <article className="flex gap-5 overflow-hidden  mb-4">
                <img alt="Placeholder" className="block h-[220px] rounded-xl ml-24 w-1/4" src={image} />
                <div>
                    <h2 className="text-2xl font-bold py-2">
                        {title}
                    </h2>
                    <p className='py-2 text-gray-500'>{description?.slice(0, 60)}</p>
                    <div className='flex justify-between'>
                        <p className='text-xl'>Price: ${price}</p>
                        <p className='text-xl'>Area: {serviceArea}</p>
                    </div>
                    <a className="flex items-center no-underline hover:underline text-black" href="#">
                        <img alt="Placeholder" className="w-10 h-10 rounded-full" src={providerImage} />
                        <p className="ml-2 text-sm">
                            {providerName}
                        </p>
                    </a>
                    <div className="flex gap-4 py-2">
                        <button
                            type="button"
                            onClick={openModal}
                            className="bg-blue-500 text-white rounded-md px-4 py-2 mt-2 hover:bg-blue-600"
                        >
                            Update
                        </button>
                        <ServiceUpdateModal
                            isOpen={isOpen}
                            closeModal={closeModal}
                            service={service}
                            refetch={refetch}
                        ></ServiceUpdateModal>
                        <button onClick={(e)=> handleDelete(_id)} className="bg-red-500 text-white rounded-md px-4 py-2 mt-2 hover:bg-red-600">Delete</button>
                    </div>
                </div>

            </article >

        </div >
    )
}

export default ManageServiceCard;