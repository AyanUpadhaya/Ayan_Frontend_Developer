import React, { createContext, useEffect, useState, } from 'react';
import useFetch from '../CustomHook/useFetch';


const Loader =()=>{
    return (
        <div className="d-flex align-items-center text-light">
            <strong>Loading...</strong>
            <div className="spinner-border ms-auto text-light" role="status" aria-hidden="true"></div>
        </div>
    )
}


export const GlobalContext = createContext(null);
const ContextProvider = ({ children }) => {
    const [loading,setLoading] = useState(true)
    const [rockets, setRockets] = useFetch('http://localhost/spacefox/server/rockets.php');
    const [capsules, setCapsules] = useFetch('http://localhost/spacefox/server/capsules.php');

    useEffect(()=>{
        setLoading(false)
    },[rockets])
    
    
    const contextValue = {
        rockets,
        setRockets,
        Loader,
        loading,
        setLoading,
        capsules,
        setCapsules
    }

    return (
        <GlobalContext.Provider value={contextValue}>
            {children}
        </GlobalContext.Provider>
    );
};

export default ContextProvider;