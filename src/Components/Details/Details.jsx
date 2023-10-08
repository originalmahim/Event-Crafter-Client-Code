import { FaUsers, FaMoneyCheck, FaClipboardList, FaHeart } from 'react-icons/fa';
import { Link, useLoaderData, useParams } from 'react-router-dom';

const Details = () => {
          const service = useLoaderData()
          const {id} = useParams()
          const idIntizer = parseInt(id)
          const details = service.find(detail => detail.id == idIntizer)
          console.log(details.shortDescription
                    );
          
          return (
          <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
          <div className="aspect-w-16 aspect-h-7">
          <img className="w-full rounded-xl" src={details.thumbnailImageSrc} />
          </div>
          <div className='my-3'>
          <h1 className='lg:text-3xl font-semibold'>{details.shortDescription}</h1>
          <p className='text-xl px-2 my-2'>{details.description}</p>
          </div>
          <div className='my-3'>
          <h1 className='lg:text-3xl font-semibold'>About This Service</h1>
          <p className='text-xl px-2 my-2'>{details.ServiceDetails}</p>
          </div>

          <div className="mt-5 lg:mt-16 grid lg:grid-cols-3 gap-8 lg:gap-12">
          <div className="lg:col-span-1">
          <h2 className="font-bold text-2xl md:text-3xl text-black ">
          Plan Memorable Events
          </h2>
          <p className="mt-2 md:mt-4 text-black">
          We specialize in creating unforgettable experiences for weddings, anniversaries, baby showers, bridal showers, and family gatherings.
          </p>
          <Link to = "/booking" >
          <button className='btn mt-4 bg-[#1c6e5f] text-white'>Book Now</button>
          </Link>
          </div>

          <div className="lg:col-span-2">
          <div className="grid sm:grid-cols-2 gap-8 md:gap-12">
          <div className="flex gap-x-5">
          <FaUsers className="flex-shrink-0 mt-1 w-6 h-6 text-blue-600 dark:text-blue-500" />
          <div className="grow">
          <h3 className="text-lg font-semibold text-black">
          Expert Event Planners
          </h3>
          <p className="mt-1 text-black">
          Our team of experienced event planners ensures seamless execution and success of your events.
          </p>
          </div>
          </div>

          <div className="flex gap-x-5">
          <FaMoneyCheck className="flex-shrink-0 mt-1 w-6 h-6 text-blue-600 dark:text-blue-500" />
          <div className="grow">
          <h3 className="text-lg font-semibold text-black">
          Budget-Friendly Options
          </h3>
          <p className="mt-1 text-black">
          We offer affordable event packages without compromising on quality.
          </p>
          </div>
          </div>

          <div className="flex gap-x-5">
          <FaClipboardList className="flex-shrink-0 mt-1 w-6 h-6 text-blue-600 dark:text-blue-500" />
          <div className="grow">
          <h3 className="text-lg font-semibold text-black">
          Detailed Planning
          </h3>
          <p className="mt-1 text-black">
          Our comprehensive event planning checklist ensures no detail is overlooked.
          </p>
          </div>
          </div>

          <div className="flex gap-x-5">
          <FaHeart className="flex-shrink-0 mt-1 w-6 h-6 text-blue-600 dark:text-blue-500" />
          <div className="grow">
          <h3 className="text-lg font-semibold text-black">
          Personalized Touch
          </h3>
          <p className="mt-1 text-black">
          We tailor each event to your unique preferences, adding a personal touch.
          </p>
          </div>
          </div>
          </div>
          </div>
          </div>
          </div>
          );
};

export default Details;