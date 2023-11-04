import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { WholewebsiteContex } from "../AuthProvider/AuthProvider";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import app from "../Firebase/firebase.config";
import Swal from 'sweetalert2'

const Login = () => {
  const [success,setSuccess] = useState('')
  const [error,setError] = useState('')
  const location = useLocation()
  const navigate = useNavigate()
  const {Login} = useContext(WholewebsiteContex)
  
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();
   
  const handleGoogleSignin = () => {
    signInWithPopup(auth,provider)
    .then(result => {
      Swal.fire(
        'Loged In',
        'You have loged in successfully',
        'success'
      )
      
      setSuccess('successfully loged in with', result.user.email)
      navigate(location?.state ? location.state : '/')
    })
    .catch(error => {
      setError(error.message);
    })
  }
          const handleSubmit = e => {
            e.preventDefault()
            const email = e.target.email.value;
            const password = e.target.password.value;
            setSuccess('')
            setError('')
            Login(email,password)
            .then(() => {
              
              Swal.fire(
                'Loged In',
                'You have loged in successfully',
                'success'
              )
              setSuccess('Loged In Successfully')
              navigate(location?.state ? location.state : '/')
              })
            .catch(error => {
              setError(error.message);
              })
          }



          return (
          <div className="">
          <div className="max-w-7xl lg:px-52  mx-auto">
          <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">

          <div className="w-full md:w-full lg:w-9/12 mx-auto md:mx-0">
          <div className="bg-white p-10 flex flex-col w-full shadow-lg rounded-xl border-2">
          <h2 className="text-2xl font-bold text-gray-800 text-left mb-5">
          Sign In
          </h2>
          <form onSubmit={handleSubmit} className="w-full">
          <div id="input" className="flex flex-col w-full my-5">
          <label htmlFor="email" className="text-gray-500 mb-2">
          Your Email
          </label>
          <input
          type="email"
          id="username"
          name = "email"
          placeholder="Please insert your email"
          className="appearance-none border-2 border-gray-100 rounded-lg px-4 py-3 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-green-600 focus:shadow-lg"
          />
          </div>
          <div id="input" className="flex flex-col w-full my-5">
          <label htmlFor="password" className="text-gray-500 mb-2">
          Password
          </label>
          <input
          type="password"
          id="password"
          name="password"
          placeholder="Please insert your password"
          className="appearance-none border-2 border-gray-100 rounded-lg px-4 py-3 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-green-600 focus:shadow-lg"
          />
          </div>
          <div id="button" className="flex flex-col w-full my-5">
          <button
          type="submit"
          className="w-full py-4 bg-[#1c6e5f] rounded-lg text-green-100"
          >
          <div className="flex flex-row items-center justify-center">
          <div className="mr-2">
          <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          >
          <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013-3v1"
          ></path>
          </svg>
          </div>
          <div className="font-bold">Sign In</div>
          </div>
          </button>
          <div className="flex justify-evenly mt-5">
          <a
          className="w-full text-center font-medium text-gray-500"
          >
          Recover password!
          </a>
          <Link to = "/register" className="w-full text-center font-medium text-gray-500">Register</Link>
          </div>
          </div>
          </form>
          <div className="text-center">
          {
            success && <p className="text-xl  text-green-400">{success}</p>
          }
          {
            error && <p className="text-xl text-red-500">{error}</p>
          }
          </div>
          <div className="text-center">
           <h1 className="text-black">or continue with</h1>
            <button onClick={handleGoogleSignin} className="my-4 btn bg-emerald-600 text-white border-none">Google</button>
          </div>
          </div>
          </div>
          </div>
          </div>
          </div>
          );
};

export default Login;