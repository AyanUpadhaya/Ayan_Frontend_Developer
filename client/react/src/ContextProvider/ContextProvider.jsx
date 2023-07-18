import React, { createContext, useEffect, useState, } from 'react';
import useFetch from '../CustomHook/useFetch';



export const GlobalContext = createContext(null);
const ContextProvider = ({ children }) => {
    const [rockets, setRockets] = useFetch('https://space-server-kohl.vercel.app/rockets');
    const [capsules, setCapsules] = useFetch('https://space-server-kohl.vercel.app/capsules');
    const [crews,setCrews] = useFetch('https://space-server-kohl.vercel.app/crews')

    
    
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