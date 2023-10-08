import { Link, NavLink, Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import { useContext } from "react";
import { WholewebsiteContex } from "../AuthProvider/AuthProvider";


const Header = () => {
         const {user} = useContext(WholewebsiteContex)
          const links = <>
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/service">Services</NavLink></li>
          <li><NavLink to="/about">About Us</NavLink></li>
          </>

          return (
          <div >
          <div className="bg-base-200 sticky">
          <div className="navbar  max-w-7xl mx-auto ">
          <div className="navbar-start">
          <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
          {links}
          </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
          </div>
          <div className="navbar-end">
          <div className="hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
          {links}
          </ul>
          </div> 
          { user ? <button className="btn bg-teal-400 text-black" >Log Out</button> :
          <Link to = "/booking" className="btn bg-teal-400 text-black">Book Now</Link>
          }
          
          </div>
          </div>
          </div>
          <div className="min-h-[68vh] lg:px-4">
          <Outlet></Outlet>
          </div>
          <Footer></Footer>
          </div>
          );
};

export default Header;