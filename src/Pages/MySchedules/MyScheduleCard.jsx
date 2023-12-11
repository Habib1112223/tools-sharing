import Swal from "sweetalert2";
import { deleteBooking } from "../../api/booking";


const MyScheduleCard = ({ service, refetch }) => {
      const { _id, name, price, provider_image } = service;

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
                      deleteBooking(id)
                          .then((data) => {
                              if (data.deletedCount > 0) {
                                  Swal.fire('Deleted!');
                                  refetch();
                              }
                          });
                  }
              })
      }


      return (
            <><div className="shadow-md border-gray-300">
            <article className="flex gap-5 overflow-hidden  mb-4">
                <img alt="Placeholder" className="block h-[220px] rounded-xl ml-24 w-1/4" src={provider_image} />
                <div>
                    <h2 className="text-2xl font-bold py-2">
                        {/* {title} */}
                    </h2>
                    {/* <p className='py-2 text-gray-500'>{description?.slice(0, 60)}</p> */}
                    <div className='flex justify-between'>
                        {/* <p className='text-xl'>Price: ${price}</p> */}
                        {/* <p className='text-xl'>Area: {serviceArea}</p> */}
                    </div>
                    <a className="flex items-center no-underline hover:underline text-black" href="#">
                        {/* <img alt="Placeholder" className="w-10 h-10 rounded-full" src={providerImage} /> */}
                        <p className="ml-2 text-sm">
                            {/* {providerName} */}
                        </p>
                    </a>
                    <div className="flex gap-4 py-2">
                        <button onClick={(e)=> handleDelete(_id)} className="bg-red-500 text-white rounded-md px-4 py-2 mt-2 hover:bg-red-600">Delete Booking</button>
                    </div>
                </div>

            </article >

        </div >
            </>
      );
};

export default MyScheduleCard;