
 import { FaFacebook, FaGithub, FaTwitter } from 'react-icons/fa'; 

function Footer() {
  return (
    <div className="relative mt-16 bg-[#1c6e5f]">
    <svg
      className="absolute top-0 w-full h-6 -mt-5 sm:-mt-10 sm:h-16 text-[#1c6e5f]"
      preserveAspectRatio="none"
      viewBox="0 0 1440 54"
    >
      <path
        fill="currentColor"
        d="M0 22L120 16.7C240 11 480 1.00001 720 0.700012C960 1.00001 1200 11 1320 16.7L1440 22V54H1320C1200 54 960 54 720 54C480 54 240 54 120 54H0V22Z"
      />
    </svg>
    <div className="px-4 pt-12 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
      <div className="grid gap-16 row-gap-10 mb-8 lg:grid-cols-6">
        <div className="md:max-w-md lg:col-span-2">
          <a
            href="/"
            aria-label="Go home"
            title="Company"
            className="inline-flex items-center"
          >
            <svg
              className="w-8 text-teal-accent-400"
              viewBox="0 0 24 24"
              strokeLinejoin="round"
              strokeWidth="2"
              strokeLinecap="round"
              strokeMiterlimit="10"
              stroke="currentColor"
              fill="none"
            >
              <rect x="3" y="1" width="7" height="12" />
              <rect x="3" y="17" width="7" height="6" />
              <rect x="14" y="1" width="7" height="6" />
              <rect x="14" y="11" width="7" height="12" />
            </svg>
            <span className="ml-2 text-xl font-bold tracking-wide text-white uppercase">
            Event Crafter
            </span>
          </a>
          <div className="mt-4 lg:max-w-sm">
            <p className="text-sm text-white">
            At EventCrafter, we're dedicated to turning your visions into unforgettable events. With our expert team of event artisans, we meticulously plan and craft each detail to perfection. 
            </p>
            <p className="mt-4 text-sm text-white">
            Whether it's a corporate gathering, wedding, or any special occasion, we're here to make your dreams a reality. Let's create memories together. 
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-5 row-gap-8 lg:col-span-4 md:grid-cols-4">
          <div>
            <p className="font-semibold tracking-wide text-teal-accent-400">
              Category
            </p>
            <ul className="mt-2 space-y-2">
              <li>
                <a
                  href="/"
                  className="transition-colors duration-300 text-white hover:text-teal-accent-400"
                >
                  News
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="transition-colors duration-300 text-white hover:text-teal-accent-400"
                >
                  World
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="transition-colors duration-300 text-white hover:text-teal-accent-400"
                >
                  Games
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="transition-colors duration-300 text-white hover:text-teal-accent-400"
                >
                  References
                </a>
              </li>
            </ul>
          </div>
          <div className='hidden lg:grid md:grid'>
            <p className="font-semibold tracking-wide text-teal-accent-400">
              Cherry
            </p>
            <ul className="mt-2 space-y-2">
              <li>
                <a
                  href="/"
                  className="transition-colors duration-300 text-white hover:text-teal-accent-400"
                >
                  Web
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="transition-colors duration-300 text-white hover:text-teal-accent-400"
                >
                  eCommerce
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="transition-colors duration-300 text-white hover:text-teal-accent-400"
                >
                  Business
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="transition-colors duration-300 text-white hover:text-teal-accent-400"
                >
                  Entertainment
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="transition-colors duration-300 text-white hover:text-teal-accent-400"
                >
                  Portfolio
                </a>
              </li>
            </ul>
          </div>
          <div className='hidden lg:grid md:grid' >
            <p className="font-semibold tracking-wide text-teal-accent-400">
              Apples
            </p>
            <ul className="mt-2 space-y-2">
              <li>
                <a
                  href="/"
                  className="transition-colors duration-300 text-white hover:text-teal-accent-400"
                >
                  Media
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="transition-colors duration-300 text-white hover:text-teal-accent-400"
                >
                  Brochure
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="transition-colors duration-300 text-white hover:text-teal-accent-400"
                >
                  Nonprofit
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="transition-colors duration-300 text-white hover:text-teal-accent-400"
                >
                  Educational
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="transition-colors duration-300 text-white hover:text-teal-accent-400"
                >
                  Projects
                </a>
              </li>
            </ul>
          </div>
          <div >
            <p className="font-semibold tracking-wide text-teal-accent-400">
              Business
            </p>
            <ul className="mt-2 space-y-2">
              <li>
                <a
                  href="/"
                  className="transition-colors duration-300 text-white hover:text-teal-accent-400"
                >
                  Infopreneur
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="transition-colors duration-300 text-white hover:text-teal-accent-400"
                >
                  Personal
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="transition-colors duration-300 text-white hover:text-teal-accent-400"
                >
                  Wiki
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="transition-colors duration-300 text-white hover:text-teal-accent-400"
                >
                  Forum
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-between pt-5 pb-10 border-t border-deep-purple-accent-200 sm:flex-row">
        <p className="text-sm text-white">
          © Copyright 2023 Event Crafter Inc. All rights reserved.
        </p>
        <div className="flex items-center mt-4 space-x-4 sm:mt-0">

        <a
            href="/"
            className="transition-colors duration-300 text-deep-purple-100 hover:text-teal-accent-400"
          >
            <FaGithub className='text-2xl'></FaGithub>
          </a>

          <a
            href="/"
            className="transition-colors duration-300 text-deep-purple-100 hover:text-teal-accent-400"
          >
            <FaTwitter className='text-2xl'></FaTwitter>
          </a>
          <a
            href="/"
            className="transition-colors duration-300 text-deep-purple-100 hover:text-teal-accent-400"
          >
            <FaFacebook className='text-2xl'></FaFacebook>
          </a>
        </div>
      </div>
    </div>
  </div>
  );
}

export default Footer;
