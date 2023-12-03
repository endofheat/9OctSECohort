import * from "react";
import { useData } from "../hooks/useData";
import { Link } from 'react-router-dom'
import axios from "axios";

export default function Homepage() {
  /* const movies = useData(); */
  const [movieData, setMovieData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const getData = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/movie/11?api_key=4334c8997cd13292a39f91484f9e7753`
    );
    setMovieData(data);
    setIsLoading(false);
  };
    return (
      <div className="Homepage">
        <h4>Welcome to Movie list. </h4>
        <h5>Featured Movies</h5>
       
      </div>
    );
  }
  