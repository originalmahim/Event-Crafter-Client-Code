
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Reviews = () => {
  const testimonials = [
    {
      name: "Bonnie Green",
      role: "Bride",
      event: "Wedding",
      quote: "Our wedding was an absolute dream come true, thanks to the incredible team at EventPlanner. From the stunning venue setup to the seamless coordination of every detail, they made our day truly magical. We couldn't be happier!",
      avatar: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/karen-nelson.png"
    },
    {
      name: "Roberta Casas",
      role: "Celebrant",
      event: "Anniversary",
      quote: "EventPlanner helped us celebrate our anniversary in style. The decorations, the atmosphere, and the attention to detail were simply outstanding. We highly recommend their services for creating unforgettable memories.",
      avatar: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/roberta-casas.png"
    },
    {
      name: "Jese Leos",
      role: "Event Planner",
      event: "Birthday",
      quote: "I've been planning events for years, but EventPlanner's expertise took my recent birthday party to the next level. Their creative ideas and flawless execution made it a memorable experience for everyone in attendance.",
      avatar: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png"
    },
    {
      name: "Joseph McFall",
      role: "Party Host",
      event: "Graduation Party",
      quote: "EventPlanner made my daughter's graduation party an absolute hit! From the themed decorations to the delicious catering, everything was top-notch. It was a day to cherish for our family and friends.",
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
    <section className="bg-white dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-sm">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            Event Success Stories
          </h2>
          <p className="mb-8 font-light text-gray-500 lg:mb-16 sm:text-xl dark:text-gray-400">
            Explore the stories of how we made weddings, anniversaries, birthdays, and more truly unforgettable.
          </p>
        </div>

        <div className="mx-auto max-w-screen-sm px-5">
          <Slider {...settings}>
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-lg">
                <div className="mb-4">
                  <img
                    className="w-16 h-16 rounded-full mx-auto"
                    src={testimonial.avatar}
                    alt={`profile picture of ${testimonial.name}`}
                  />
                </div>
                <blockquote className="mb-6 text-gray-700 dark:text-gray-400">
                  <p className="text-lg font-semibold mb-2">{`Memorable ${testimonial.event} Experience`}</p>
                  <p>{testimonial.quote}</p>
                </blockquote>
                <div className="text-gray-600 dark:text-gray-300">
                  <p className="font-medium">{testimonial.name}</p>
                  <p className="text-sm">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
