import React, { useState, useContext } from "react";
import { MovieContext, LoadingContext } from "../hooks/useData";
import { ImageList } from "@mui/material";
import { ImageListItem } from "@mui/material";
// import axios from "axios";

const Homepage = () => {
  const movie = useContext(MovieContext);
  const isLoading = useContext(LoadingContext);
    return !isLoading ? (
      <div className="Homepage">
        <h1>Welcome to Movie list. </h1>
      <ImageList variant="masonry" cols={3} gap={8}>
        {movie.map((movie) => (
          <ImageListItem key={movie.id}>
            <img
              //srcSet={`https://image.tmdb.org/t/p/w185${movie.backdrop_path}`}
              src={`https://image.tmdb.org/t/p/w185${movie.poster_path}`}
              alt={movie.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
      </div>
    ) : (
      <h1> Loading!!!</h1>
    )
  }
  
  export default Homepage;