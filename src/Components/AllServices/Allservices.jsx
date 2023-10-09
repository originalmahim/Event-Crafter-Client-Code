import { useEffect, useState } from "react";
import { Link } from "react-router-dom";



const Allservices = () => {
          const [allservices, setAllServies] = useState([]);
          useEffect(() => {
           fetch('services.json')
          .then(res => res.json())
          .then(data => setAllServies(data))
          },[])
          return (
          <div className="my-8">
            <div>
            <div>
            <div className="px-8 py-2 bg-gradient-to-r from-red-500 via-purple-400 to-blue-500 text-white">
            <div className="flex items-center mx-auto container justify-center md:justify-between py-2">
            <div>
            <span>Get up to 30% off your first Booking </span>
            <Link to = "/booking" rel="noopener noreferrer" className="underline">Book </Link>today!
            </div>
            <a  rel="noopener noreferrer" className="items-center gap-2 hidden md:flex">
            <svg role="img" viewBox="0 0 22 22" className="fill-current h-4 w-4">
            <path clipRule="evenodd" d="M6.5 1.75a1.75 1.75 0 100 3.5h3.51a8.785 8.785 0 00-.605-1.389C8.762 2.691 7.833 1.75 6.5 1.75zm5.49 3.5h3.51a1.75 1.75 0 000-3.5c-1.333 0-2.262.941-2.905 2.111a8.778 8.778 0 00-.605 1.389zM1.75 6.75v3.5h18.5v-3.5H1.75zm18 5H21a.75.75 0 00.75-.75V6a.75.75 0 00-.75-.75h-2.761a3.25 3.25 0 00-2.739-5c-2.167 0-3.488 1.559-4.22 2.889a9.32 9.32 0 00-.28.553 9.32 9.32 0 00-.28-.553C9.988 1.809 8.667.25 6.5.25a3.25 3.25 0 00-2.739 5H1A.75.75 0 00.25 6v5c0 .414.336.75.75.75h1.25V21c0 .414.336.75.75.75h16a.75.75 0 00.75-.75v-9.25zm-1.5 0H3.75v8.5h14.5v-8.5z" fillRule="evenodd"></path>
            </svg>
            <span className="hover:underline focus-visible:underline">Awsome Gifts</span>
            </a>
            </div>
            </div>
            </div>
            <h1 className="lg:text-5xl md:text-2xl text-xl text-center font-semibold my-2">Our Services</h1>
            </div>
            <div className="max-w-7xl mx-auto">
            <h1 className="lg:text-5xl md:text-2xl text-xl text-center font-semibold">
            Choose Your Favourite Plan
            </h1>
            <div className="grid px-3 lg:grid-cols-4  gap-6 my-14">
            {allservices.map((service, index) => (
            <div key={index} className="max-w-sm bg-[#1c6e5f] border  rounded-lg shadow ">
            <a href={service.link}>
            <img className="w-full rounded-t-lg h-[280px]" src={service.imageSrc} alt="" />
            </a>
            <div className="p-5">
            <a href={service.link}>
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{service.title}</h5>
            </a>
            <p className="mt-3 font-normal text-white ">{service.detailsTitle}</p>
            <h1 className="mb-1 text-xl text-white ">price : {service.price}</h1>
            <Link
            to = {`/services/details/${service.id}`}
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-black bg-white rounded-lg "
            >
            Read more
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
            </div>
            ))}
            </div>
            </div>
            </div>
          );
};

export default Allservices;