import { useEffect, useState } from "react";



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
          <h1 className="lg:text-5xl md:text-2xl text-xl text-center font-bold my-2">Our Services</h1>
          </div>
          <div className="max-w-7xl mx-auto">
          <h1 className="lg:text-5xl md:text-2xl text-xl text-center font-bold">
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
          <p className="mb-3 font-normal text-white ">{service.shortDescription}</p>
          <a
          href={service.link}
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
          </a>
          </div>
          </div>
          ))}
          </div>
          </div>
          </div>
          );
};

export default Allservices;