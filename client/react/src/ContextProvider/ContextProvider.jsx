import React, { createContext, useEffect, useState, } from 'react';
import useFetch from '../CustomHook/useFetch';



export const GlobalContext = createContext(null);
const ContextProvider = ({ children }) => {
    const [rockets, setRockets] = useFetch('http://localhost/spacefox/server/rockets.php');
    const [capsules, setCapsules] = useFetch('http://localhost/spacefox/server/capsules.php');
    const [crews,setCrews] = useFetch('http://localhost/spacefox/server/crews.php')

    
    
    const contextValue = {
        rockets,
        setRockets,
        capsules,
        setCapsules,
        crews,
    }

    return (
        <GlobalContext.Provider value={contextValue}>
            {children}
        </GlobalContext.Provider>
    );
};

export default ContextProvider;