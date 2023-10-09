import { useContext } from "react";
import { Link } from "react-router-dom";
import { WholewebsiteContex } from './../AuthProvider/AuthProvider';


const Banner = () => {
  const {user} = useContext(WholewebsiteContex)
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
            <div className="text-white lg:ml-44 md:ml-6 lg:mt-60 md:mt-20 p-20 lg:p-0">
            <h1 className=" lg:font-bold lg:text-7xl md:text-4xl text-xl ">Making Special <br /> Memories For Your <br /> Wedding</h1>
            <p className="my-4 text-xl hidden lg:flex">Crafting unforgettable moments to capture the essence of your love story <br /> and curating a unique, cherished experience for you and your guests, <br /> ensuring your big day is a lasting memory filled with love and joy.</p>
            { user ? <Link to = "/booking">
            <button className="lg:btn md:btn btn-sm  bg-white md:mt-4 text-black 
            border-none hover:bg-white">Book Now</button>
            </Link>  : <Link to = "/register">
            <button className="btn bg-white md:mt-4 text-black 
            border-none hover:bg-white">Register Now</button>
            </Link>}
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
            ><div className="text-white lg:ml-44 md:text-4xl md:ml-6  md:mt-20 lg:mt-60 p-20 lg:p-0">
            <h1 className=" lg:font-bold lg:text-6xl md:text-3xl ">Your Premier Anniversary <br /> Celebration Specialists</h1>
            <p className="my-4 text-xl hidden  lg:flex">We are your dedicated team of experts committed to curating unforgettable <br /> anniversary celebrations. With years of experience and a passion for love stories, <br /> we bring your dreams to life, ensuring every moment is as special as your love.</p>
            { user ? <Link to = "/booking">
            <button className="lg:btn md:btn p-1 bg-white md:mt-8 text-black 
            border-none hover:bg-white">Book Now</button>
            </Link>  : <Link to = "/register">
            <button className="btn bg-white text-black 
            border-none hover:bg-white">Register Now</button>
            </Link>}
            </div>
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
            backgroundImage: `url('https://i.ibb.co/M60pJJY/Screenshot-2023-10-09-143406.png')`,
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
            backgroundImage: `url('https://i.ibb.co/jDXNYMW/replicate-prediction-2tgkyebbfos4ze2fa2encbsgwq.png')`,
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
        