import Swal from 'sweetalert2'

const Booking = () => {

          const handlebooking = e => {
             e.preventDefault()
             Swal.fire(
                    
                    'Booking Successfull',
                    'we will Contact you as soon as possible'
                  )
          }


          return (
          <div className="max-w-7xl mx-auto px-4 bg-white">
          
          <div className="grid
          lg:grid-cols-4  gap-6 items-center justify-center my-20">
          <div className="text-xl col-span-2">
          <div data-aos="fade-right">
          <img className="rounded-lg" src="https://i.ibb.co/2ccTxGf/Screenshot-2023-10-08-141813.png"  />
          </div>
          </div>
          <div data-aos="fade-left" className=" col-span-2 lg:p-14 my-10">
          <h1 className="lg:text-4xl mb-2 font-bold text-black ">We will give a very special <br /> celebration for you</h1>
          <form onSubmit={handlebooking}>
          <div className="mb-5">
          <label htmlFor="name" className="mb-3 block text-base font-medium text-[#07074D]">
          Full Name
          </label>
          <input type="text" name="name" id="name" placeholder="Full Name" required
          className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
          </div>
          <div className="mb-5">
          <label htmlFor="phone" className="mb-3 block text-base font-medium text-[#07074D]">
          Phone Number
          </label>
          <input type="text" name="phone" id="phone" placeholder="Enter your phone number" required
          className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
          </div>
          <div className="mb-5">
          <label htmlFor="email" className="mb-3 block text-base font-medium text-[#07074D]">
          Email Address
          </label>
          <input type="email" name="email" id="email" placeholder="Enter your email" required
          className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
          </div>
          <div className="-mx-3 flex flex-wrap">
          <div className="w-full px-3 sm:w-1/2">
          <div className="mb-5">
          <label htmlFor="date" className="mb-3 block text-base font-medium text-[#07074D]">
          Date
          </label>
          <input type="date" name="date" id="date" 
          className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
          </div>
          </div>
          <div className="w-full px-3 sm:w-1/2">
          <div className="mb-5">
          <label htmlFor="time" className="mb-3 block text-base font-medium text-[#07074D]">
          Time
          </label>
          <input type="time" name="time" id="time" required
          className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
          </div>
          </div>
          </div>
          <div className="mb-5 pt-0">
          <label className="mb-5 block text-base font-semibold text-[#07074D] sm:text-xl">
          Address Details
          </label>
          <div className="-mx-3 flex flex-wrap">
          <div className="w-full px-3 sm:w-1/2">
          <div className="mb-5">
          <input type="text" name="area" id="area" placeholder="Enter Your Address" required
          className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
          </div>
          </div>
          <div className="w-full px-3 sm:w-1/2">
          <div className="mb-5">
          <input type="text" name="city" id="city" placeholder="Religion"
          className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
          </div>
          </div>
          
          
          </div>
          </div>
          <div>
          <button
          className="hover:shadow-form w-full rounded-md bg-[#1c6e5f] text-white py-3 px-8 text-center text-base font-semibold  outline-none">
          Book Appointment
          </button>
          </div>
          </form>
          </div>
          </div>
          </div>
          );
};

export default Booking;