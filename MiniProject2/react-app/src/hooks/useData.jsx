import React, { useEffect, useState, useContext, createContext } from "react";
import axios from "axios";

export const MovieContext = createContext({});
export const LoadingContext = createContext(true);

export default function UseData(props) {
  const [movie, setMovie] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    axios.get(
     `https://api.themoviedb.org/3/discover/movie/?api_key=4334c8997cd13292a39f91484f9e7753`
   ).then((data) => {
     const temp = data?.data.results;
     console.log(temp);
     setMovie(temp);
   }) 
 }, []);
  useEffect(() => {
    if(movie!=null){
      setIsLoading(false);
    }
  }, [movie]);
  return (
    <LoadingContext.Provider value={isLoading}>
      <MovieContext.Provider value={movie}>
        {props.children}
      </MovieContext.Provider>
    </LoadingContext.Provider>     
  );
    
  
}