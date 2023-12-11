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
                    setFormData({
                        image: '',
                        title: '',
                        price: '',
                        serviceArea: '',
                        description: '',
                      });
                }
            })
            .catch(console.error())
    };

    return (
        <div className='w-8/12 mx-auto py-20'>
            <h1 className="text-5xl mb-8 font-bold text-center  text-slate-700 ">Add A Service</h1>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block text-2xl text-teal-700 font-semibold">Picture URL of the Service</label>
                    <input
                        type="text"
                        name="image"
                        required
                        placeholder='Your picture URL'
                        value={formData.image}
                        onChange={handleChange}
                        className="border border-gray-300 p-2 rounded-md w-full"
                    />
                </div>
                <div>
                    <label className="block text-2xl text-teal-700 font-semibold">Service Name</label>
                    <input
                        type="text"
                        name="title"
                        required
                        placeholder='Your service name'
                        value={formData.title}
                        onChange={handleChange}
                        className="border border-gray-300 p-2 rounded-md w-full"
                    />
                </div>
                <div>
                    <label className="block text-2xl text-teal-700 font-semibold">Your name</label>
                    <input
                        type="text"
                        value={user.displayName}
                        readOnly
                        className="border border-gray-300 p-2 rounded-md w-full"
                    />
                </div>
                <div>
                    <label className="block text-2xl text-teal-700 font-semibold">Your email</label>
                    <input
                        type="text"
                        value={user.email}
                        readOnly
                        className="border border-gray-300 p-2 rounded-md w-full"
                    />
                </div>
                <div>
                    <label className="block text-2xl text-teal-700 font-semibold">Price</label>
                    <input
                        type="number"
                        name="price"
                        required
                        placeholder='Your price'
                        value={formData.price}
                        onChange={handleChange}
                        className="border border-gray-300 p-2 rounded-md w-full"
                    />
                </div>
                <div>
                    <label className="block text-2xl text-teal-700 font-semibold">Service Area</label>
                    <input
                        type="text"
                        name="serviceArea"
                        required
                        placeholder='Your service area'
                        value={formData.serviceArea}
                        onChange={handleChange}
                        className="border border-gray-300 p-2 rounded-md w-full"
                    />
                </div>
                <div>
                    <label className="block text-2xl text-teal-700 font-semibold">Description</label>
                    <textarea
                        name="description"
                        value={formData.description}
                        required
                        placeholder='Your description'
                        onChange={handleChange}
                        className="border border-gray-300 p-2 rounded-md w-full"
                    />
                </div>
                <div className='mx-auto'>
                    <button type="submit" className="bg-blue-500 text-lg mt-4 text-white rounded-md px-8 py-4 hover:bg-blue-600">
                        Add Service
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AddService;
