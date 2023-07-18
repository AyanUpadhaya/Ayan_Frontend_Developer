import React, { useEffect, useState } from 'react';

const useFetch = (url) => {
    const [data,setData] = useState([])
    useEffect(()=>{
        fetch(url,{
            method:'GET',
            headers: {
                'Authorization': import.meta.env.VITE_ACCESS_TOKEN
            }
        })
        .then(res => res.json())
        .then(data => setData(data))
    },[])

    return [data,setData]
};

export default useFetch;