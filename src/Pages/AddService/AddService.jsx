import React, { useContext, useState } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import useTitle from '../../hooks/useTitle';
import { postService } from '../../api/Services';
import Swal from 'sweetalert2';

const AddService = () => {
    const { user } = useContext(AuthContext)
    const [formData, setFormData] = useState({
        image: '',
        title: '',
        price: '',
        serviceArea: '',
        description: '',
        email: user.email,
        providerName: user.displayName,
        providerImage: user.photoURL,
    });
    useTitle('Add Service');


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        postService(formData)
        .then((res) => {
                if (res.acknowledged == true) {
                    Swal.fire("Successfully added service")
                }
            })
            .catch(console.error())
    };

    return (
        <div className='w-8/12 mx-auto py-20'>
            <h1 className="text-2xl mb-4">Add Service</h1>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block">Picture URL of the Service</label>
                    <input
                        type="text"
                        name="image"
                        value={formData.image}
                        onChange={handleChange}
                        className="border border-gray-300 p-2 rounded-md w-full"
                    />
                </div>
                <div>
                    <label className="block">Service Name</label>
                    <input
                        type="text"
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                        className="border border-gray-300 p-2 rounded-md w-full"
                    />
                </div>
                <div>
                    <label className="block">Your name</label>
                    <input
                        type="text"
                        value={user.displayName}
                        readOnly
                        className="border border-gray-300 p-2 rounded-md w-full"
                    />
                </div>
                <div>
                    <label className="block">Your email</label>
                    <input
                        type="text"
                        value={user.email}
                        readOnly
                        className="border border-gray-300 p-2 rounded-md w-full"
                    />
                </div>
                <div>
                    <label className="block">Price</label>
                    <input
                        type="number"
                        name="price"
                        value={formData.price}
                        onChange={handleChange}
                        className="border border-gray-300 p-2 rounded-md w-full"
                    />
                </div>
                <div>
                    <label className="block">Service Area</label>
                    <input
                        type="text"
                        name="serviceArea"
                        value={formData.serviceArea}
                        onChange={handleChange}
                        className="border border-gray-300 p-2 rounded-md w-full"
                    />
                </div>
                <div>
                    <label className="block">Description</label>
                    <textarea
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        className="border border-gray-300 p-2 rounded-md w-full"
                    />
                </div>
                <button type="submit" className="bg-blue-500 text-white rounded-md px-4 py-2 hover:bg-blue-600">
                    Add Service
                </button>
            </form>
        </div>
    );
};

export default AddService;
