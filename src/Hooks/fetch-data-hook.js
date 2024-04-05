import { useEffect, useState } from "react";

export function useFetchData(url){
    
  
    const[data, setData] =useState(null);
    useEffect(()=>{
        fetch(url)
        .then(response=>response.json())
        .then(resData=>{
            setData(resData)
        });
    },[url])

    return data;
}