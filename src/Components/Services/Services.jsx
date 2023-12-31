import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { WholewebsiteContex } from './../AuthProvider/AuthProvider';


const Services = () => {
  const [showall , setShowall] = useState(6)
  const [allservices, setAllServies] = useState([]);
  useEffect(() => {
    fetch('http://localhost:5000/services')
    .then(res => res.json())
    .then(data => setAllServies(data))
  },[])
  const {user} = useContext(WholewebsiteContex)

  return (
      <div className="my-8">

      <div className="max-w-7xl mx-auto">
      <h1 data-aos="zoom-out-up" className="lg:text-5xl md:text-2xl text-xl text-center font-bold">
      We’ll make your next celebration <br />
      very special!
      </h1>
      <div className="grid px-3 lg:grid-cols-3 md:grid-cols-2  gap-6 my-14">
      {allservices.slice(0,showall).map((service, index) => (
      <div data-aos="flip-left" key={index} className="max-w-sm bg-[#1c6e5f] border  rounded-lg shadow ">
      <a href={service.link}>
      <img className="w-full rounded-t-lg h-[280px]" src={service.imageSrc} alt="" />
      </a>
      <div className="p-5">
      <a href={service.link}>
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{service.title}</h5>
      </a>
      <p className="mt-1 font-normal text-xl text-white ">{service.detailsTitle}</p>
      <h1 className="mb-1 text-xl text-white ">price : {service.price}</h1>
      <Link
      to = {`/details/${service._id}`}
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
      <div className={` text-center items-center ${showall > 6 && 'hidden'}`} >
      { user ? <button onClick={() => setShowall(allservices.length)} className="btn bg-[#1c6e5f] text-white">Show All</button> :

      <Link to = "/services" >
      <button className="btn bg-[#1c6e5f] text-white">Show All</button>
      </Link>
      }
      </div>
      </div>
      </div>
  );
};

export default Services;
