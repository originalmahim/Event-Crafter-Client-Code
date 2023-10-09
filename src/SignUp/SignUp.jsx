
import { Link } from "react-router-dom";
import { AiFillEye,AiFillEyeInvisible } from 'react-icons/ai';
import { useContext, useState } from "react";
import { WholewebsiteContex } from "../Components/AuthProvider/AuthProvider";
import { updateProfile } from "firebase/auth";



const SignUp = () => {
        const {CreateUser} = useContext(WholewebsiteContex)

        const [registerError,setRegisterError] = useState('')
        const [success,setSuccess] = useState('')
        const [showPassword, setShowPassword] = useState(false);

        const handlesignupformSubmit = e => {
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;
        const confirmPassword = e.target.confirm.value;
        const name = e.target.name.value;
        const url = e.target.photoUrl.value;
        setRegisterError('')
        setSuccess('')


        if (!/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/.test(password)) {
        return setRegisterError('password should be as long as the password contains the number and special character')    
        }

        if (password != confirmPassword) {
        return setRegisterError('Password And Confirm Password Should be Same') 
        }

        CreateUser(email,password)
        .then(result => {
        console.log(result.user);
        updateProfile(result.user,{
        displayName: name,
        photoURL: url,
        })
        setSuccess('Account Created Successfully')

        })
        .catch(error => {
        setRegisterError(error.message);
        })

        }

          return (
          <section className="max-w-7xl mx-auto font-poppins text-xl mb-6 ">
          <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className="w-full bg-white  shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
          Create an account
          </h1>
          
          <form onSubmit={handlesignupformSubmit} className="space-y-4 md:space-y-6">
          <div>
          <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Full Name</label>
          <input
          type="text"
          name="name"
          className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Full Name "
          required
          />
          </div>
          <div>
          <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Photo Url</label>
          <input
          type="text"
          name="photoUrl"
          className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Paste Your image Url"
          required
          />
          </div>

          <div>
          <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
          <input
          type="email"
          name="email"
          id="email"
          className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="name@company.com"
          required
          />
          </div>
          <div>
          <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
          <div className="flex relative">
          <input
          type={showPassword ? "text" : "password"}
          name="password"

          placeholder="••••••••"
          className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          required
          />
          <span onClick={() => setShowPassword(!showPassword)} className="absolute inset-y-0 right-4 flex items-center pr-2 text-white  cursor-pointer">
          { showPassword ? <AiFillEyeInvisible></AiFillEyeInvisible> : <AiFillEye></AiFillEye>}</span>
          </div>
          </div>
          <div>
          <label htmlFor="confirm-password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm password</label>
          <div>
          <div className="flex relative">
          <input
          type={showPassword ? "text" : "password"}
          name="confirm"

          placeholder="••••••••"
          className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          required
          />
          <span onClick={() => setShowPassword(!showPassword)} className="absolute inset-y-0 right-4 flex items-center pr-2 text-white  cursor-pointer">
          { showPassword ? <AiFillEyeInvisible></AiFillEyeInvisible> : <AiFillEye></AiFillEye>}</span>
          </div>
          </div>
          </div>
          <div className="flex items-start">
          <div className="flex items-center h-5">
          <input
          id="terms"
          aria-describedby="terms"
          type="checkbox"
          className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
          required
          />
          </div>
          <div className="ml-3 text-sm">
          <label htmlFor="terms" className="font-light text-gray-500 dark:text-gray-300">I accept the <a className="font-medium text-primary-600 hover:underline dark:text-primary-500" href="#">Terms and Conditions</a></label>
          </div>
          </div>
          <button
          
          className="w-full text-white bg-[#1c6e5f] hover:bg-white hover:text-[#1c6e5f] focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
          >
          Create an account
          </button>
          <p className="text-sm font-light text-gray-500 dark:text-gray-400">
          Already have an account? <Link to = "/login"><a className="font-medium text-primary-600 hover:underline dark:text-primary-500">Login here</a></Link> 
          </p>
          </form>
          {
          registerError &&
          
          <p className="text-red-400">{registerError}</p>
           
          }
          {
          success &&
          <p className="text-green-600">${success}</p>
          }
          </div>     
                </div>
          </div>
          </section>)
};

export default SignUp;