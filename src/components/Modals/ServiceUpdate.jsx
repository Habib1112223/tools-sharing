import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useContext, useState } from 'react'
import Swal from 'sweetalert2';
import { AuthContext } from '../../Providers/AuthProvider';
import { postBooking } from '../../api/booking';
import { updateService } from '../../api/Services';

const ServiceUpdateModal = ({ closeModal, isOpen, service, refetch }) => {
      const { user } = useContext(AuthContext)
      const [updatedService, setUpdatedService] = useState(service);

      const handleChange = (e) => {
            const { name, value } = e.target;
            setUpdatedService((prevService) => ({ ...prevService, [name]: value }));
      }

      const handleSubmit = (e) => {
            e.preventDefault();

            const updateServiceData = {
                  image: updatedService.image,
                  title: updatedService.title,
                  price: updatedService.price,
                  serviceArea: updatedService.serviceArea,
                  description: updatedService.description,
                  email: user.email,
                  providerName: user.displayName,
                  providerImage: user.photoURL,

            }
            console.log(updateServiceData);

           updateService(updatedService._id, updateServiceData )
                  .then((res) => {
                        Swal.fire("Updated Successfully")
                        refetch()
                        closeModal()

                  })
                  .catch(console.error())
      }
      return (
            <>


                  <Transition appear show={isOpen} as={Fragment}>
                        <Dialog as="div" className="relative z-10" onClose={closeModal}>
                              <Transition.Child
                                    as={Fragment}
                                    enter="ease-out duration-300"
                                    enterFrom="opacity-0"
                                    enterTo="opacity-100"
                                    leave="ease-in duration-200"
                                    leaveFrom="opacity-100"
                                    leaveTo="opacity-0"
                              >
                                    <div className="fixed inset-0 bg-black/25" />
                              </Transition.Child>

                              <div className="fixed inset-0 overflow-y-auto">
                                    <div className="flex min-h-full items-center justify-center p-4 text-center">
                                          <Transition.Child
                                                as={Fragment}
                                                enter="ease-out duration-300"
                                                enterFrom="opacity-0 scale-95"
                                                enterTo="opacity-100 scale-100"
                                                leave="ease-in duration-200"
                                                leaveFrom="opacity-100 scale-100"
                                                leaveTo="opacity-0 scale-95"
                                                className="w-[500px]"
                                          >
                                                <Dialog.Panel className="lg:w-[600px] transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                                                      <button onClick={(e) => closeModal()} className='absolute top-3 right-3'>X</button>
                                                      <form onSubmit={handleSubmit} className='space-y-4'>

                                                            <div>
                                                                  <label className="block font-bold text-xl">Service Name</label>
                                                                  <input
                                                                        type="text"
                                                                        name="title"
                                                                        value={updatedService.title}
                                                                        onChange={handleChange}
                                                                        className="border border-gray-300 p-2 rounded-md w-full"
                                                                  />
                                                            </div>
                                                            <div>
                                                                  <label className="block font-bold text-xl">Service Image URL</label>
                                                                  <input
                                                                        type="text"
                                                                        name="image"
                                                                        value={updatedService.image}
                                                                        onChange={handleChange}
                                                                        className="border border-gray-300 p-2 rounded-md w-full"
                                                                  />
                                                            </div>

                                                            <div>
                                                                  <label className="block font-bold text-xl">Provider Email</label>
                                                                  <input
                                                                        type="text"
                                                                        name="email"
                                                                        value={updatedService.email}
                                                                        onChange={handleChange}
                                                                        readOnly
                                                                        className="border border-gray-300 p-2 rounded-md w-full"
                                                                  />
                                                            </div>

                                                            <div>
                                                                  <label className="block text-2xl text-teal-700 font-semibold">Price</label>
                                                                  <input
                                                                        type="number"
                                                                        name="price"
                                                                        placeholder='Your price'
                                                                        value={updatedService.price}
                                                                        onChange={handleChange}
                                                                        className="border border-gray-300 p-2 rounded-md w-full"
                                                                  />
                                                            </div>
                                                            <div>
                                                                  <label className="block text-2xl text-teal-700 font-semibold">Service Area</label>
                                                                  <input
                                                                        type="text"
                                                                        name="serviceArea"
                                                                        placeholder='Your service area'
                                                                        value={updatedService.serviceArea}
                                                                        onChange={handleChange}
                                                                        className="border border-gray-300 p-2 rounded-md w-full"
                                                                  />
                                                            </div>
                                                            <div>
                                                                  <label className="block text-2xl text-teal-700 font-semibold">Description</label>
                                                                  <textarea
                                                                        name="description"
                                                                        value={updatedService.description}
                                                                        placeholder='Your description'
                                                                        onChange={handleChange}
                                                                        className="border border-gray-300 p-2 rounded-md w-full"
                                                                  />
                                                            </div>
                                                            <div className='mt-2'>
                                                                  <button type="submit" className="bg-blue-500 text-white rounded-md px-4 py-2 hover:bg-blue-600">
                                                                        Update
                                                                  </button>
                                                            </div>
                                                      </form>
                                                </Dialog.Panel>
                                          </Transition.Child>
                                    </div>
                              </div>
                        </Dialog>
                  </Transition>
            </>
      )
}


export default ServiceUpdateModal;