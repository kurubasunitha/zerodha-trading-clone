import React, { useContext } from 'react';

import { createContext } from 'react';

const AuthContext= createContext(); 
export function AuthProvider({children}){
      const userName="Dharmendra";
      const name="Dharmendra12345";

  
    return(
        <>
        <AuthContext.Provider value={{userName, name}} >
        {children}
        </AuthContext.Provider>
        </>
    )
};
export function useAuth(){
    return useContext(AuthContext)
}