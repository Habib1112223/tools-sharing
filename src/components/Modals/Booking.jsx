import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useContext, useState } from 'react'
import Swal from 'sweetalert2';
import { AuthContext } from '../../Providers/AuthProvider';
import { postBooking } from '../../api/booking';
import { useNavigate } from 'react-router-dom';

const BookingModal = ({ closeModal, isOpen, service }) => {
      const { user } = useContext(AuthContext)
      const nagivate = useNavigate()
      const { _id, title, image, providerName, email, providerImage, description, price, serviceArea } = service;

      const handleSubmit = (e) => {
            e.preventDefault()
            const form = e.target
            const name = form.name.value;
            const email = form.providerEmail.value;
            const providerName = form.providerName.value;
            const price = form.price.value;
            const date = form.date.value;
            const instruction = form.instruction.value;

            console.log(name, email, providerName, providerImage, price, date, instruction);

            const booking = {
                  service_id: _id,
                  service_title: title,
                  provider_name: name,
                  provider_image: image,
                  user_email: user?.email,
                  provider_email: email,
                  price: price,
                  date: date,
                  instruction: instruction,

            }
            console.log(booking);

            postBooking(booking)
                  .then((res) => {
                        if (res.acknowledged == true) {
                              Swal.fire("Successfully Booked")
                              nagivate('/my-schedules', {replace: true})
                              closeModal()
                        }
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
                                                                  <img className='w-[150px] h-[150px] mx-auto mb-8' src={image} alt="" />
                                                            </div>
                                                            <div>
                                                                  <label className="block font-bold text-xl">Service Name</label>
                                                                  <input
                                                                        type="text"
                                                                        name="title"
                                                                        value={title}
                                                                        readOnly
                                                                        className="border border-gray-300 p-2 rounded-md w-full"
                                                                  />
                                                            </div>
                                                            <div>
                                                                  <label className="block font-bold text-xl">Service provider Email</label>
                                                                  <input
                                                                        type="text"
                                                                        name="providerEmail"
                                                                        value={email}
                                                                        readOnly
                                                                        className="border border-gray-300 p-2 rounded-md w-full"
                                                                  />
                                                            </div>
                                                            <div>
                                                                  <label className="block font-bold text-xl">User Email</label>
                                                                  <input
                                                                        type="text"
                                                                        name="user-email"
                                                                        readOnly
                                                                        value={user?.email}
                                                                        className="border border-gray-300 p-2 rounded-md w-full"
                                                                  />
                                                            </div>
                                                            <div>
                                                                  <label className="block font-bold text-xl">Service Provider Name</label>
                                                                  <input
                                                                        type="text"
                                                                        name="providerName"
                                                                        readOnly
                                                                        value={providerName}
                                                                        className="border border-gray-300 p-2 rounded-md w-full"
                                                                  />
                                                            </div>
                                                            <div>
                                                                  <label className="block font-bold text-xl">Price</label>
                                                                  <input
                                                                        type="text"
                                                                        name="price"
                                                                        readOnly
                                                                        value={price}
                                                                        className="border border-gray-300 p-2 rounded-md w-full"
                                                                  />
                                                            </div>
                                                            <div>
                                                                  <label className="block font-bold text-xl">Service Taking Date</label>
                                                                  <input
                                                                        type="date"
                                                                        name="date"
                                                                        required
                                                                        className="border border-gray-300 p-2 rounded-md w-full"
                                                                  />
                                                            </div>
                                                            <div>
                                                                  <label className="block font-bold text-xl">Special Instruction</label>
                                                                  <input
                                                                        type="text"
                                                                        name="instruction"
                                                                        required
                                                                        placeholder='give your any Instruction'
                                                                        className="border border-gray-300 p-2 rounded-md w-full"
                                                                  />
                                                            </div>
                                                            <div className='mt-2'>
                                                                  <button type="submit" className="bg-blue-500 text-white rounded-md px-4 py-2 hover:bg-blue-600">
                                                                        Purchase Now
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


export default BookingModal;