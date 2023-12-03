import { useData } from "../hooks/useData";

const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer 4334c8997cd13292a39f91484f9e7753'
    }
  };


export default function Movie() {
    const movieData = useData('https://api.themoviedb.org/3/account/20773157/favorite/movies', options,)
    console.log("I am here")

    return (
      <div className="Movie">
        <h1>Movie</h1>
      </div>
    );
  }
  