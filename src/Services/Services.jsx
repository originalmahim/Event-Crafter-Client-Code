
const Services = () => {
  const serviceItems = [
    {
      title: "Wedding",
      shortDescription: "Make your dream wedding a reality with our expert planning services.",
      description: "From intimate ceremonies to grand celebrations, we specialize in creating unforgettable wedding experiences. Our dedicated team will take care of every detail to ensure your big day is perfect.",
      imageSrc: "https://templates.hibotheme.com/wazo/default/assets/img/instagram/insta-18.jpg",
    },
    {
      title: "Anniversary",
      shortDescription: "Celebrate your love story with a memorable anniversary event.",
      description: "Whether it's your first anniversary or a milestone celebration, we'll help you create a romantic and meaningful event. Let us handle the arrangements while you cherish the moments.",
      imageSrc: "https://templates.hibotheme.com/wazo/default/assets/img/instagram/insta-17.jpg",
    },
    {
      title: "Birthday Parties",
      shortDescription: "Host a fantastic birthday party for your loved ones.",
      description: "Planning a birthday bash? Our team can transform your ideas into a fun-filled celebration. From themes to decorations, we've got your party covered.",
      imageSrc: "https://th.bing.com/th/id/R.774fc9585b48a1b67e9e09d0bdfa283c?rik=zHuUS2hNy9c5jA&pid=ImgRaw&r=0",
    },
    {
      title: "Family Gatherings",
      shortDescription: "Bring your family together for a memorable gathering.",
      description: "Family reunions and gatherings are special moments. We'll help you create an atmosphere of love and togetherness with our event planning services.",
      imageSrc: "https://th.bing.com/th/id/OIP.bK9aA0WXkn074xR4h9gUqwHaE8?pid=ImgDet&rs=1",
    },
  ];

  return (
    <div className="my-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="lg:text-5xl md:text-2xl text-xl text-center font-bold">
          We’ll make your next celebration <br />
          very special!
        </h1>
        <div className="grid px-3 lg:grid-cols-4 md:grid-cols-2 gap-6 my-14">
          {serviceItems.map((service, index) => (
            <div key={index} className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <a href={service.link}>
                <img className="w-full rounded-t-lg h-[280px]" src={service.imageSrc} alt="" />
              </a>
              <div className="p-5">
                <a href={service.link}>
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{service.title}</h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{service.shortDescription}</p>
                <a
                  href={service.link}
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
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

export default Services;
