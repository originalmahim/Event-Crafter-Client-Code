import { useContext } from "react";
import { WholewebsiteContex } from "../AuthProvider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";


const PrivateRaute = ({children}) => {

          const {user,spinner} = useContext(WholewebsiteContex)
          const location = useLocation()
          if (spinner) {
             return <h1 className="text-center text-4xl text-blue-500 items-center lg:mt-96">Loading...</h1>       
          }
          if (user) {
            return children        
          }

          return <Navigate state = {location.pathname} to = "/login" ></Navigate>
};

export default PrivateRaute;