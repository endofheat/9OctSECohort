import { useData } from "../hooks/useData";

const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0MzM0Yzg5OTdjZDEzMjkyYTM5ZjkxNDg0ZjllNzc1MyIsInN1YiI6IjY1NjdlN2ZkZmI1Mjk5MDBjODgzNjc4ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._ipT7LYrli7VWptEwmObvNw5-JLkV_GBJ7k0Sw-Oujw'
    }
  };


export default function Movie() {
    /* const movieData = useData('https://api.themohttps://api.themoviedb.org/3/account/20773157/favorite/moviesviedb.org/3/authentication', options,)
    console.log(movieData) */

    return (
      <div className="Movie">
        <h1>Home</h1>
      </div>
    );
  }
  