import React, { useEffect, useState } from "react";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import axios from "axios";

export function UseData() {
/*   const Movie = () => { */
    const [movie, setMovie] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
      axios
        .get(
          `https://api.themoviedb.org/3/discover/movie/?api_key=4334c8997cd13292a39f91484f9e7753`
        )
        .then((response) => {
          const temp = response?.data.results;
          console.log(temp)
          if(isLoading != false){
            setMovie(temp);
        }
        if(movie != null){
            setIsLoading(false);
            }
    })
        .catch((error) => {
            console.error("Error fetching data: ", error)
            setError(error)
            setIsLoading(false)
        })
    }, [movie]);


    return !isLoading ? (
        <div className="Movie">
          <List sx={{ width: '100%', /* maxWidth: 1920, */ bgcolor: 'background.paper' }}>
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
        </div>
      ) : (
        <h1>Loading!!</h1>
      );
/* } */}
