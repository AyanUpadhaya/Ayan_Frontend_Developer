import React, { createContext } from 'react';
import useFetch from '../CustomHook/useFetch';


const Loader =()=>{
    return (
        <div className="d-flex align-items-center">
            <strong>Loading...</strong>
            <div className="spinner-border ms-auto" role="status" aria-hidden="true"></div>
        </div>
    )
}


export const GlobalContext = createContext(null);
const ContextProvider = ({ children }) => {
    const loading = true;
    const [rockets, setRockets] = useFetch('http://localhost/spacefox/server/rockets.php');
    const contextValue = {
        rockets,
        setRockets,
        loading,
        Loader
    }

    return (
        <GlobalContext.Provider value={contextValue}>

        </GlobalContext.Provider>
    );
};

export default ContextProvider;