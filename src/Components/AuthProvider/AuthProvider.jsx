import { createContext } from "react";
import PropTypes from 'prop-types';





          //Created ContexApi - Fob Objerving user behaivior
          const WholewebsiteContex = createContext(null)
          
          
          
          const AuthProvider = ({children}) => {

          

          const userinformation = {
                    
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