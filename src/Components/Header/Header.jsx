import { Link, NavLink, Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import { useContext } from "react";
import { WholewebsiteContex } from "../AuthProvider/AuthProvider";
import Swal from 'sweetalert2'


const Header = () => {
         const {user, logOut,spinner} = useContext(WholewebsiteContex)
          const links = <>
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/services">Services</NavLink></li>
          { user ? <li><NavLink to="/booking">My Bookings</NavLink></li> : <li><NavLink to="/about">About Us</NavLink></li>}
          
          {
            user ? '' : <li><NavLink to="/booking">Booking</NavLink></li>
          }
          </>
          const handleLogOut = () => {
            logOut()
            .then(() => {
              Swal.fire(
                'Loged Out',
                'You have loged Out successfully',
                'success'
              )
            })
          }
          if (spinner) {
          return (
          <div className="flex lg:mt-96 justify-center items-center">
          <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin dark:border-violet-400 text-center"></div>
          </div>)}

          return (
          <div >
          <div className="bg-base-200 ">
          <div className="navbar  max-w-7xl mx-auto ">
          <div className="navbar-start">
          <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
          {links
          
          }
          {
            user ? <button onClick={handleLogOut} className=" bg-[#1c6e5f] rounded-md text-white" >Log Out</button> : 
            <Link to = "/login" className=" bg-[#1c6e5f] p-1 rounded-md  text-white">LogIn</Link>
          }
          </ul>
          </div>
          <h1 className="flex gap-2 items-center lg:text-xl lg:font-bold font-medium"><svg
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
          <div className="">
          {
            user &&  <div className="dropdown dropdown-end">
            <div className="flex items-center gap-1">
                <p className="flex">{user.displayName}</p>
            <label tabIndex={0} className="btn bg-green-400 btn-circle avatar ">
              <div className="w-10 rounded-full">
                <img src={user.photoURL} />
              </div>
            </label>

              </div>
          </div>
          }
          </div>
          <div className="hidden lg:flex">
           { user ? 
          <button onClick={handleLogOut} className=" bg-[#1c6e5f] text-white btn " >Log Out</button> :
          <Link to = "/login" className="btn bg-[#1c6e5f] text-white">LogIn</Link>
             }
          </div>
          
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