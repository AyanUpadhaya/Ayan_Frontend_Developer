import React, { useEffect, useState } from 'react';

const useFetch = (url) => {
    const [data,setData] = useState([])
    useEffect(()=>{
        fetch(url,{
            method:'GET',
            headers: {
                'Authorization': "175b770301706c3a7e34ecf2f862cd1663934b696c43a6f0f9d8c08c2224fed7"
            }
        })
        .then(res => res.json())
        .then(data => setData(data))
    },[])

    return [data,setData]
};

export default useFetch;