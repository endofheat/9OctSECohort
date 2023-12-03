import React from "react";
import { ImageList } from "@mui/material";
import { ImageListItem } from "@mui/material";
import { UseData } from "../hooks/useData";

export default function Homepage() {
  const movies = UseData();
  const movieArray = Array.isArray(movies) ? movies : [];

  return (
    <div className="Homepage">
      <h1>Welcome to Movie list. </h1>
      <ImageList variant="masonry" cols={3} gap={8}>
        {movieArray.map((movie) => (
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
  );
}
