
const Services = () => {
  const serviceItems = [
    {
      title: "Wedding",
      shortDescription: "Make your dream wedding a reality with our expert planning services.",
      description: "From intimate ceremonies to grand celebrations, we specialize in creating unforgettable wedding experiences. Our dedicated team will take care of every detail to ensure your big day is perfect.",
      imageSrc: "https://templates.hibotheme.com/wazo/default/assets/img/instagram/insta-18.jpg",
      thumbnailImageSrc: "https://templates.hibotheme.com/wazo/default/assets/img/instagram/insta-18-thumbnail.jpg",
    },
    {
      title: "Anniversary",
      shortDescription: "Celebrate your love story with a memorable anniversary event.",
      description: "Whether it's your first anniversary or a milestone celebration, we'll help you create a romantic and meaningful event. Let us handle the arrangements while you cherish the moments.",
      imageSrc: "https://templates.hibotheme.com/wazo/default/assets/img/instagram/insta-17.jpg",
      thumbnailImageSrc: "https://templates.hibotheme.com/wazo/default/assets/img/instagram/insta-17-thumbnail.jpg",
    },
    {
      title: "Birthday Parties",
      shortDescription: "Host a fantastic birthday party for your loved ones.",
      description: "Planning a birthday bash? Our team can transform your ideas into a fun-filled celebration. From themes to decorations, we've got your party covered.",
      imageSrc: "https://th.bing.com/th/id/R.774fc9585b48a1b67e9e09d0bdfa283c?rik=zHuUS2hNy9c5jA&pid=ImgRaw&r=0",
      thumbnailImageSrc: "Add your thumbnail image URL here",
    },
    {
      title: "Family Gatherings",
      shortDescription: "Bring your family together for a memorable gathering.",
      description: "Family reunions and gatherings are special moments. We'll help you create an atmosphere of love and togetherness with our event planning services.",
      imageSrc: "https://th.bing.com/th/id/OIP.bK9aA0WXkn074xR4h9gUqwHaE8?pid=ImgDet&rs=1",
      thumbnailImageSrc: "Add your thumbnail image URL here",
    },
    {
      title: "Baby Showers",
      shortDescription: "Welcome a new life with a joyous baby shower celebration.",
      description: "Expecting a bundle of joy? Let us handle the baby shower preparations. We'll create a charming and heartwarming event to celebrate this special milestone.",
      imageSrc: "https://static.wixstatic.com/media/d5e589_648057e687924d08861173ba9c538a66~mv2.jpg/v1/fill/w_640,h_422,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/d5e589_648057e687924d08861173ba9c538a66~mv2.jpg",
      thumbnailImageSrc: "Add your thumbnail image URL here",
    },
    {
      title: "Holiday Parties",
      shortDescription: "Spread holiday cheer with festive and memorable parties.",
      description: "Get into the holiday spirit with our holiday party planning services. Whether it's Christmas, New Year's, or any special occasion, we'll make it a magical and joyful event.",
      imageSrc: "https://snacknation.com/wp-content/uploads/2018/07/antenna-502693-unsplash.jpg",
      thumbnailImageSrc: "Add your thumbnail image URL here",
    },
    {
      title: "Fundraising Galas",
      shortDescription: "Support your cause with a successful fundraising gala.",
      description: "Raise funds for your charity or organization with a glamorous fundraising gala. Our expert team will ensure your event is not only elegant but also impactful.",
      imageSrc: "https://blog.justgiving.com/wp-content/uploads/2020/09/Charity-gala.png",
      thumbnailImageSrc: "Add your thumbnail image URL here",
    },
    {
      title: "Graduation Parties",
      shortDescription: "Celebrate educational achievements with a memorable graduation party.",
      description: "Make your graduation a memorable milestone with our expert planning services. Whether it's high school, college, or beyond, we'll help you celebrate in style.",
      imageSrc: "https://www.mec.cuny.edu/wp-content/uploads/2023/05/52130007714_28b0ba8971_c.jpg",
      thumbnailImageSrc: "Add your thumbnail image URL here",
    },
    {
      title: "Engagement Parties",
      shortDescription: "Celebrate the beginning of a lifelong journey with a special engagement party.",
      description: "Mark the start of your love story with a memorable engagement party. We'll create a romantic and meaningful event that captures your unique journey.",
      imageSrc: "https://dreamscaper.sg/blogpic/Singapore_marriage_proposal_photography_7.jpg",
      thumbnailImageSrc: "Add your thumbnail image URL here",
    },
    {
      title: "Retirement Celebrations",
      shortDescription: "Honor years of hard work with a memorable retirement celebration.",
      description: "Say goodbye to the working years with a special retirement celebration. Let us plan an event that reflects your accomplishments and future adventures.",
      imageSrc: "https://retirementtipsandtricks.com/wp-content/uploads/2021/11/What-To-Say-At-Someones-Retirement-Party.jpg",
      thumbnailImageSrc: "Add your thumbnail image URL here",
    },
    {
      title: "Bridal Showers",
      shortDescription: "Shower the bride-to-be with love and laughter at a memorable bridal shower.",
      description: "Celebrate the bride's upcoming wedding with a delightful bridal shower. We'll plan a joyous event filled with love, laughter, and special moments.",
      imageSrc: "https://millennialmagazine.com/wp-content/uploads/2021/11/pretty-bridesmaids.jpg",
      thumbnailImageSrc: "Add your thumbnail image URL here",
    },
    {
      title: "Prom Nights",
      shortDescription: "Dance the night away at a magical prom night.",
      description: "Make your high school prom a night to remember with our event planning services. We'll create a glamorous and enchanting atmosphere for you and your friends.",
      imageSrc: "https://ilead.net.in/wp-content/uploads/2023/02/prom_night_2023_20.jpg",
    }
  ];
  

  return (
    <div className="my-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="lg:text-5xl md:text-2xl text-xl text-center font-bold">
          We’ll make your next celebration <br />
          very special!
        </h1>
        <div className="grid px-3 lg:grid-cols-3  gap-6 my-14">
          {serviceItems.map((service, index) => (
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

export default Services;
