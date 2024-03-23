import { useState, useEffect } from "react";


export const useFetch = (apiPath, queryTerm="") => {
    const [data, setData] = useState([]);
    console.log("APi PATH:" ,apiPath)
    const url = `https://api.themoviedb.org/3/${
    queryTerm ? "search/movie" : apiPath
  }?api_key=${process.env.REACT_APP_API_KEY}&query=${queryTerm}`;
    console.log(url)
    useEffect(() => {
        async function fetchMovies() {
         const response = await fetch(url);
         const json = await response.json();
         setData(json.results)
         console.log(json);
        
         
        }
        fetchMovies();
      }, [url])
  return  {data}
  
}


