import React, { useState, useContext } from "react";
import { MovieContext, LoadingContext } from "../hooks/useData";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';

export default function Movie() {
  const movie = useContext(MovieContext);
  const isLoading = useContext(LoadingContext);
  return !isLoading ?(
    <List sx={{ width: '100%', maxWidth: 1800, bgcolor: 'background.paper' }}>
    {movie.map((value) => (
    <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar alt="Remy Sharp" src={"https://image.tmdb.org/t/p/w185"+ value.poster_path}/>
          </ListItemAvatar>
          <ListItemText
            primary={value.title}
            secondary={
              <React.Fragment>
                <Typography
                  sx={{ display: 'inline' }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
                  Rating: {value.vote_average}
                </Typography>
                 — {value.overview}
              </React.Fragment>
            }
          />
      </ListItem>
    ))}
  </List>
  ) : (
    <h1> Loading!!!</h1>
  )
}