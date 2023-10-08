import { Link, NavLink, Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import { useContext } from "react";
import { WholewebsiteContex } from "../AuthProvider/AuthProvider";



const Header = () => {
         const {user, logOut,spinner} = useContext(WholewebsiteContex)
          const links = <>
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/services">Services</NavLink></li>
          <li><NavLink to="/about">About Us</NavLink></li>
          </>
          if (spinner) {
          return (
          <div className="flex lg:mt-96 justify-center items-center">
          <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin dark:border-violet-400 text-center"></div>
          </div>)}

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
          <h1 className="flex gap-2 items-center text-xl font-bold"><svg
              className="w-8 text-[#1c6e5f]"
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
            </svg> Event Crafter</h1>
          </div>
          <div className="navbar-end items-center justify-center">
          <div className="hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
          {links}
          </ul>
          </div > 
          <div className="hidden lg:flex">
          {
            user && <p className="mr-2">{user.email}</p>
          }
          </div>
          { user ? <button onClick={() => logOut()} className="btn bg-[#1c6e5f] text-white" >Log Out</button> :
          <Link to = "/booking" className="btn bg-[#1c6e5f] text-white">Book Now</Link>
          }
          
          </div>
          </div>
          </div>
          <div className="min-h-[68vh] ">
          <Outlet></Outlet>
          </div>
          <Footer></Footer>
          </div>
          );
};

export default Header;