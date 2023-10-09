import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Reviews = () => {
  const testimonials = [
    {
      name: "Bonnie Green",
      role: "Bride",
      event: "Wedding",
      quote: "Our wedding was an absolute dream come true, thanks to the incredible team at Event Crafter. From the stunning venue setup to the seamless coordination of every detail, they made our day truly magical. We couldn't be happier!",
      avatar: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/karen-nelson.png"
    },
    {
      name: "Roberta Casas",
      role: "Celebrant",
      event: "Anniversary",
      quote: "Event Crafter helped us celebrate our anniversary in style. The decorations, the atmosphere, and the attention to detail were simply outstanding. We highly recommend their services for creating unforgettable memories.",
      avatar: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/roberta-casas.png"
    },
    {
      name: "Jese Leos",
      role: "Event Planner",
      event: "Birthday",
      quote: "I've been planning events for years, but Event Crafter's expertise took my recent birthday party to the next level. Their creative ideas and flawless execution made it a memorable experience for everyone in attendance.",
      avatar: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png"
    },
    {
      name: "Joseph McFall",
      role: "Party Host",
      event: "Graduation Party",
      quote: "Event Crafter made my daughter's graduation party an absolute hit! From the themed decorations to the delicious catering, everything was top-notch. It was a day to cherish for our family and friends.",
      avatar: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/joseph-mcfall.png"
    },
    ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
      <section className="bg-white ">
      <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6">
      <div className="mx-auto max-w-screen-lg">
      <h2 className="mb-4 text-5xl  font-semibold text-black">
      Event Success Stories
      </h2>
      <p className="mb-8  text-black lg:mb-16 sm:text-xl ">
      Explore the stories of how we made weddings, anniversaries, birthdays, and more truly unforgettable.
      </p>
      </div>

      <div className="mx-auto max-w-screen-lg px-5">
      <Slider {...settings}>
      {testimonials.map((testimonial, index) => (
      <div key={index} className="bg-[#1c6e5f] p-6 rounded-lg shadow-lg ">
      <section className="my-8 text-black bg-white rounded-lg">
      <div className="container  flex flex-col items-center p-4 mx-auto space-y-6 md:p-8">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="w-16 h-16 ">
      <polygon points="328.375 384 332.073 458.999 256.211 406.28 179.924 459.049 183.625 384 151.586 384 146.064 496 182.756 496 256.169 445.22 329.242 496 365.936 496 360.414 384 328.375 384"></polygon>
      <path d="M415.409,154.914l-2.194-48.054L372.7,80.933,346.768,40.414l-48.055-2.2L256,16.093,213.287,38.219l-48.055,2.2L139.3,80.933,98.785,106.86l-2.194,48.054L74.464,197.628l22.127,42.715,2.2,48.053L139.3,314.323l25.928,40.52,48.055,2.195L256,379.164l42.713-22.126,48.055-2.195,25.928-40.52L413.214,288.4l2.195-48.053,22.127-42.715Zm-31.646,76.949L382,270.377l-32.475,20.78-20.78,32.475-38.515,1.76L256,343.125l-34.234-17.733-38.515-1.76-20.78-32.475L130,270.377l-1.759-38.514L110.5,197.628,128.237,163.4,130,124.88,162.471,104.1l20.78-32.474,38.515-1.76L256,52.132l34.234,17.733,38.515,1.76,20.78,32.474L382,124.88l1.759,38.515L401.5,197.628Z"></path>
      </svg>
      <p className="px-6 py-2 text-xl font-semibold text-center sm:font-bold sm:text-3xl md:text-4xl lg:max-w-2xl xl:max-w-4xl ">{testimonial.quote}</p>
      <div className="flex items-center justify-center space-x-3">
      <img src={testimonial.avatar}  className="w-20 h-20 bg-center bg-cover rounded-full  " />
      <div>
      <p className="text-[#1c6e5f] font-bold">{testimonial.name}</p>
      <p className="text-xl font-semibold ">{testimonial.role}</p>

      </div>
      </div>
      </div>
      </section>
      </div>
      ))}
      </Slider>
      </div>
      </div>
      </section>
  );
};

export default Reviews;