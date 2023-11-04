import axios from "axios";
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { WholewebsiteContex } from "../Components/AuthProvider/AuthProvider";

const axiosSecure = axios.create({
  baseURL : `http://localhost:5000`,
  withCredentials: true
})
const useAxios = () => {
  const { logOut } = useContext(WholewebsiteContex)
          const navigate = useNavigate();
  useEffect(() => {
    axiosSecure.interceptors.response.use(res => {
        return res;
      }, error => {
console.log('error tracked', error.response);
        if (error.response.status === 401 || error.response.status === 403) {
                    logOut()
            .then(() => {
              navigate('/login')
            })
            .catch((error) => {
              console.log(error);
        })
      }
    })
  },[logOut,navigate])
  return axiosSecure;
};

export default useAxios;