import { FaCheckCircle } from 'react-icons/fa';


const About = () => {
          return (
          <div>
          <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
          <div className="lg:grid lg:grid-cols-12 lg:gap-16 lg:items-center">
          <div className="lg:col-span-7">
          <div className="grid grid-cols-12 gap-2 sm:gap-6 items-center lg:-translate-x-10">
          <div className="col-span-4">
          <img className="rounded-xl" src="https://templates.hibotheme.com/wazo/default/assets/img/blog/blog-6.jpg" />
          </div>
          <div className="col-span-3">
          <img className="rounded-xl" src="https://templates.hibotheme.com/wazo/default/assets/img/about/appoint-img-3.jpg" />
          </div>
          <div className="col-span-5">
          <img className="rounded-xl" src="https://templates.hibotheme.com/wazo/default/assets/img/project/project-3.jpg" />
          </div>
          </div>
          </div>
          <div className="mt-5 sm:mt-10 lg:mt-0 lg:col-span-5">
          <div className="space-y-6 sm:space-y-8">
          <div className="space-y-2 md:space-y-4">
          <h2 className="font-bold text-3xl lg:text-4xl text-black ">
          Elevate Your Events with Us
          </h2>
          <p className="text-gray-500">
          We provide collaborative tools to design unforgettable user experiences for various events, including weddings, birthdays, anniversaries, baby showers, and bridal showers.
          </p>
          </div>
          <ul role="list" className="space-y-2 sm:space-y-4">
          <li className="flex space-x-3">
          <FaCheckCircle className="flex-shrink-0 h-6 w-6 text-blue-600 dark:text-blue-500" />
          <span className="text-sm sm:text-base text-gray-500">
          Less routine – more creativity
          </span>
          </li>
          <li className="flex space-x-3">
          <FaCheckCircle className="flex-shrink-0 h-6 w-6 text-blue-600 dark:text-blue-500" />
          <span className="text-sm sm:text-base text-gray-500">
          Hundreds of thousands saved
          </span>
          </li>
          <li className="flex space-x-3">
          <FaCheckCircle className="flex-shrink-0 h-6 w-6 text-blue-600 dark:text-blue-500" />
          <span className="text-sm sm:text-base text-gray-500">
          Scale budgets efficiently
          </span>
          </li>
          </ul>
          </div>
          </div>
          </div>
          </div> 
          <div className="grid max-w-screen-xl grid-cols-1 gap-8 px-8 py-16 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 text-black ">
          <div className="flex flex-col justify-between">
          <div className="">
          <h2 className="text-4xl font-bold leadi lg:text-5xl">Let's talk!</h2>
          <p className='text-xl mt-3'>At EventCrafter, we're dedicated to turning your visions into unforgettable events. With our expert team of event artisans, we meticulously plan and craft each detail to perfection.</p>
          </div>
          </div>
          <form  className="space-y-6">
          <div>
          <label form="name" className="text-sm">Full name</label>
          <input id="name" type="text" placeholder="Your Full Name" className="w-full p-3 rounded border" />
          </div>
          <div>
          <label form="email" className="text-sm">Email</label>
          <input id="email" type="email" className="w-full p-3 rounded border" />
          </div>
          <div>
          <label form="message" className="text-sm">Message</label>
          <textarea id="message" rows="3" className="w-full p-3 rounded border-2 "></textarea>
          </div>
          <button type="submit" className="w-full p-3 text-sm font-bold tracki uppercase rounded bg-[#1c6e5f] text-white ">Send Message</button>
          </form>
          </div>                            
          </div>
          );
};

export default About;