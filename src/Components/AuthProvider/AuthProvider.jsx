import { createContext } from "react";
import PropTypes from 'prop-types';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from "../Firebase/firebase.config";



          //Created ContexApi - Fob Objerving user behaivior
          const WholewebsiteContex = createContext(null)
          const auth = getAuth(app)
          
          
          const AuthProvider = ({children}) => {

          const CreateUser = (email,password) => {
               return  createUserWithEmailAndPassword(auth,email,password)    
          }

          const Login = (email,password) => {
          return signInWithEmailAndPassword(auth,email,password)
          }

          const SignOut = () => {
          signOut(auth)
          }

          const userinformation = {
                    CreateUser,
                    Login,
                    SignOut
          }

          return (
          <WholewebsiteContex.Provider value={userinformation} >
               {children}               
          </WholewebsiteContex.Provider>
          );
};

AuthProvider.propTypes = {
          children: PropTypes.node.isRequired,
}

export default AuthProvider;