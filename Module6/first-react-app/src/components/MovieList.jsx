import { useState } from "react"
import AddMovieForm from "./AddMovieForm"

function Movie({title, year, synopsis}){
    return (
        <li>
            <h2>{title}</h2>
            <p>Years: {year}</p>
            <p>{synopsis}</p>
        </li>
    )
}

const movies = [
  {
    id: 1,
    title: "The Shawshank Redemption",
    year: 1994,
    synopsis: "Two imprisoned men find redemption.",
  },
  {
    id: 2,
    title: "The Dark Knight",
    year: 2008,
    synopsis: "Batman fights the menace known as the Joker.",
  },
  {
    id: 3,
    title: "Interstellar",
    year: 2014,
    synopsis: "Explorers travel through a wormhole in space.",
  },
];

function MoviesList() {
    const [currentMovies, setCurrentMovies] = useState(movies);


    const movieItems = currentMovies.map((movie) => (
    <Movie  key={movie.id} 
            title={movie.title}
            year={movie.year}
            synopsis={movie.synopsis}/>
    
  ));



  const handleReverseMovies = () => {
    // first clone the original, so we don’t mutate it
    let newMovies = [...currentMovies];
    newMovies.reverse(); // 2. modify the clone
    setCurrentMovies(newMovies); // 3. set updated clone in state
    }

    const handleSortByYear = function() {
      let newMovies = [...currentMovies];
      newMovies.sort((movieA, movieB) => movieA.year - movieB.year);
      setCurrentMovies(newMovies);
    }
  
    const handleSortByTitle = function() {
      let newMovies = [...currentMovies];
      newMovies.sort((movieA, movieB) => movieA.title > movieB.title ? 1 : -1);
      setCurrentMovies(newMovies);
    }

      // add this in MoviesList component
    const handleAddMovie = (newMovie) => {
      newMovie.id = currentMovies.length + 1; // unreliable but succinct
      setCurrentMovies([...currentMovies, newMovie]);
    };


 return (
  <div className="MoviesList componentBox">
    <ul>
        {movieItems}
    </ul>
    <button onClick={handleReverseMovies}>Reverse List</button>
    <SortButton sortField="Year" onSort={handleSortByYear} />
    <SortButton sortField="Title" onSort={handleSortByTitle} />
    <AddMovieForm onAddMovie={handleAddMovie} />
</div>
);

}

// new component to render any kind of sorting button
function SortButton({sortField, onSort}) {
  return (
    <button onClick={onSort}>Sort By {sortField}</button>
  )
}


export default MoviesList;
