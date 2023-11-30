import { useState, useEffect } from "react";

// hooks are usually named exports rather than default
export function useData(url,defaultValue = []) {
  // state variable for holding fetched json data
  const [data, setData] = useState([defaultValue]); // need to set a default value for data before fetching it
  const [errorMsg, setErrorMsg] = useState("");

/*   const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0MzM0Yzg5OTdjZDEzMjkyYTM5ZjkxNDg0ZjllNzc1MyIsInN1YiI6IjY1NjdlN2ZkZmI1Mjk5MDBjODgzNjc4ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._ipT7LYrli7VWptEwmObvNw5-JLkV_GBJ7k0Sw-Oujw'
    }
  };
   */
  useEffect(() => {
    if (url) {
      let ignore = false;
      fetch(url, options)
        .then((response) => response.json())
        .then((json) => {
          if (!ignore) {
            setData(json);
            console.log(json);
          }
        })
        .catch((error) => {
          console.error(error);
          setErrorMsg(error.message); 
/*       fetch('https://api.themoviedb.org/3/account/20773157/favorite/tv?language=en-US&page=1&sort_by=created_at.asc', options)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));*/
        }); // return an error message if there was a problem 

      // cleanup function, in case url changes before complete
      return () => {
        ignore = true;
      };
    }
  }, [url]); // re-run effect if url changes

  // return the data fetched from the given url
  return [data, errorMsg];
}

// save as useData.jsx in the 'hooks' folder
