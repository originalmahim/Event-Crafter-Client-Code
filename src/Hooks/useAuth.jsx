import { useContext } from "react";
import { WholewebsiteContex } from "../Components/AuthProvider/AuthProvider";



const useAuth = () => {
    const auth = useContext(WholewebsiteContex);
    return auth;
};

export default useAuth;