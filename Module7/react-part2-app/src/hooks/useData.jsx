import { useState, useEffect } from "react";

// hooks are usually named exports rather than default
export function useData(url, defaultValue = {}) {
  // state variable for holding fetched json data
  const [data, setData] = useState(defaultValue); // need to set a default value for data before fetching it
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    if (url) {
      let ignore = false;
      fetch(url)
        .then((response) => response.json())
        .then((json) => {
          if (!ignore) {
            setData(json);
          }
        })
        .catch((error) => {
          console.error(error);
          setErrorMsg(error.message);
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
