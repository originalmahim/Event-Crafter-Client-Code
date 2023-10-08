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
          <h1 className="lg:text-5xl md:text-2xl text-xl text-center font-semibold my-2">Our Services</h1>
          </div>
          <div className="max-w-7xl mx-auto">
          <h1 className="lg:text-5xl md:text-2xl text-xl text-center font-semibold">
          Choose Your Favourite Plan
          </h1>
          <div className="grid px-3 lg:grid-cols-4  gap-6 my-14">
          {allservices.map((service, index) => (
          <div key={index} className="max-w-sm bg-gradient-to-b from-teal-900 via-teal-600 to-teal-300 border  rounded-lg shadow ">
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