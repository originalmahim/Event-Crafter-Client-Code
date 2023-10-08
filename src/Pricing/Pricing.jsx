import { Link } from "react-router-dom";


const Pricing = () => {
          return (
          <div className="max-w-6xl mx-auto pt-10 pb-36 px-8">
          <div className="max-w-md mx-auto mb-14 text-center">
          <h1 className="text-4xl font-semibold mb-6 lg:text-5xl">
          <span className="text-[#1c6e5f]">Flexible</span> Event Plans
          </h1>
          <p className="text-xl text-gray-500 font-medium">
          Choose an event plan that works best for your social gatherings.
          </p>
          </div>

          <div className="flex flex-col justify-between items-center lg:flex-row lg:items-start">
          <div className="w-full flex-1 mt-8 p-8 order-2 bg-white shadow-xl rounded-3xl sm:w-96 lg:w-full lg:order-1 lg:rounded-r-none">
          <div className="mb-7 pb-7 flex items-center border-b border-gray-300">
          
          <div className="ml-5">
          <span className="block text-2xl font-semibold">Wedding Package</span>
          <span>
          <span className="font-medium text-gray-500 text-xl align-top">$&thinsp;</span>
          <span className="text-3xl font-bold">10000</span>
          </span>
          <span className="text-gray-500 font-medium">/ Basic</span>
          </div>
          </div>
          <ul className="mb-7 font-medium text-gray-500">
          <li className="flex text-lg mb-2">
          <img src="https://res.cloudinary.com/williamsondesign/check-grey.svg" alt="checkmark" />
          <span className="ml-3">Full event planning and coordination</span>
          </li>
          <li className="flex text-lg mb-2">
          <img src="https://res.cloudinary.com/williamsondesign/check-grey.svg" alt="checkmark" />
          <span className="ml-3">Venue selection and decoration</span>
          </li>
          <li className="flex text-lg">
          <img src="https://res.cloudinary.com/williamsondesign/check-grey.svg" alt="checkmark" />
          <span className="ml-3">Catering and entertainment</span>
          </li>
          </ul>
          <Link to = "/booking"  className="flex justify-center items-center bg-[#1c6e5f] rounded-xl py-5 px-4 text-center text-white text-xl">
          Choose Plan
          <img src="https://res.cloudinary.com/williamsondesign/arrow-right.svg" alt="arrow" className="ml-2" />
          </Link>
          </div>

          <div className="w-full flex-1 p-8 order-1 shadow-xl rounded-3xl bg-[#1c6e5f] text-white sm:w-96 lg:w-full lg:order-2 lg:mt-0">
          <div className="mb-8 pb-8 flex items-center border-b border-gray-600">
          
          <div className="ml-5">
          <span className="block text-3xl font-semibold text-white">Birthday Package</span>
          <span>
          <span className="font-medium text-xl align-top">$&thinsp;</span>
          <span className="text-3xl font-bold text-white">2000 </span>
          </span>
          <span className="font-medium">/ Basic</span>
          </div>
          </div>
          <ul className="mb-10 font-medium text-xl">
          <li className="flex mb-6">
          <img src="https://res.cloudinary.com/williamsondesign/check-white.svg" alt="checkmark" />
          <span className="ml-3">Customized birthday party planning</span>
          </li>
          <li className="flex mb-6">
          <img src="https://res.cloudinary.com/williamsondesign/check-white.svg" alt="checkmark" />
          <span className="ml-3">Theme selection and decorations</span>
          </li>
          <li className="flex">
          <img src="https://res.cloudinary.com/williamsondesign/check-white.svg" alt="checkmark" />
          <span className="ml-3">Entertainment and cake</span>
          </li>
          </ul>
          <Link to = "/booking"  className="flex justify-center items-center bg-white rounded-xl py-5 px-4 text-center text-black text-xl">
          Choose Plan
          <svg
                    className="w-3.5 h-3.5 ml-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
          </Link>
          </div>

          <div className="w-full flex-1 mt-8 p-8 order-3 bg-white shadow-xl rounded-3xl sm:w-96 lg:w-full lg:order-3 lg:rounded-l-none">
          <div className="mb-7 pb-7 flex items-center border-b border-gray-300">
          
          <div className="ml-5">
          <span className="block text-2xl font-semibold">Family Gatherings</span>
          <span>
          <span className="font-medium text-gray-500 text-xl align-top">$&thinsp;</span>
          <span className="text-3xl font-bold">5000 </span>
          </span>
          <span className="text-gray-500 font-medium">/ Basic</span>
          </div>
          </div>
          <ul className="mb-7 font-medium text-gray-500">
          <li className="flex text-lg mb-2">
          <img src="https://res.cloudinary.com/williamsondesign/check-grey.svg" alt="checkmark" />
          <span className="ml-3">Customized event planning</span>
          </li>
          <li className="flex text-lg mb-2">
          <img src="https://res.cloudinary.com/williamsondesign/check-grey.svg" alt="checkmark" />
          <span className="ml-3">Venue selection and decoration</span>
          </li>
          <li className="flex text-lg">
          <img src="https://res.cloudinary.com/williamsondesign/check-grey.svg" alt="checkmark" />
          <span className="ml-3">Catering and entertainment</span>
          </li>
          </ul>
          <Link to = "/booking"  className="flex justify-center items-center bg-[#1c6e5f] rounded-xl py-5 px-4 text-center text-white text-xl">
          Choose Plan
          <img src="https://res.cloudinary.com/williamsondesign/arrow-right.svg" alt="arrow" className="ml-2" />
          </Link>
          </div>
          </div>
          </div>
          );
};

export default Pricing;