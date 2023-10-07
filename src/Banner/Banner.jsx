

const Banner = () => {
          return (
            <div>
                    <div className="carousel w-full lg:h-[800px] md:h-[500px] h-[220px]">
                    <div
                    id="slide1"
                    className="carousel-item relative w-full"
                    style={{
                    backgroundImage: `url('https://i.ibb.co/3pXrtJw/Screenshot-2023-10-06-210059.png')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    }}
                    >
                    <div className="text-white lg:ml-44 lg:mt-60 p-20 lg:p-0">
                    <h1 className=" lg:font-bold lg:text-7xl text-xl ">Making Special <br /> Memories For Your <br /> Wedding</h1>
                    <p className="my-4 text-xl hidden lg:flex">Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br /> Veritatis error cumque, omnis odit unde facere provident <br /> amet blanditiis accusantium corrupti?</p>
                    <button className="btn bg-white text-black 
                    border-none hover:bg-white">Register Now</button>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide4" className="btn btn-circle">
                    ❮
                    </a>
                    <a href="#slide2" className="btn btn-circle">
                    ❯
                    </a>
                    </div>
                    </div>
                    <div
                    id="slide2"
                    className="carousel-item relative w-full"
                    style={{
                    backgroundImage: `url('https://i.ibb.co/pJFY3sH/Screenshot-2023-10-06-210300.png')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    }}
                    >
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle">
                    ❮
                    </a>
                    <a href="#slide3" className="btn btn-circle">
                    ❯
                    </a>
                    </div>
                    </div>
                    <div
                    id="slide3"
                    className="carousel-item relative w-full"
                    style={{
                    backgroundImage: `url('https://i.ibb.co/qCjkY5m/Screenshot-2023-10-06-234805.png')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    }}
                    >
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle">
                    ❮
                    </a>
                    <a href="#slide4" className="btn btn-circle">
                    ❯
                    </a>
                    </div>
                    </div>
                    <div
                    id="slide4"
                    className="carousel-item relative w-full"
                    style={{
                    backgroundImage: `url('https://templates.hibotheme.com/wazo/default/assets/img/project/single-project-1.jpg')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    }}
                    >
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide3" className="btn btn-circle">
                    ❮
                    </a>
                    <a href="#slide1" className="btn btn-circle">
                    ❯
                    </a>
                    </div>
                    </div>
                    </div>
                    </div>
          );
        };
        
        export default Banner;
        