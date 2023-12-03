import React, { useEffect, useState } from "react";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import axios from "axios";

const Homepage = () => {
  /* const movies = useData(); */
  const [movie, setMovie] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // const getData = async () => {
  //   const { data } = await axios.get(
  //     `https://api.themoviedb.org/3/discover/movie/?api_key=4334c8997cd13292a39f91484f9e7753`
  //   );
  //   setMovie(data.result);
  //   setIsLoading(false);
  //   console.log(isLoading);
    
  // };
  useEffect(() => {
     axios.get(
      `https://api.themoviedb.org/3/discover/movie/?api_key=4334c8997cd13292a39f91484f9e7753`
    ).then((data) => {
      const temp = data?.data.results
      console.log(temp);
      setMovie(temp);
      setIsLoading(false);
    });
  }, []);


    return !isLoading ? (
      <div className="Homepage">
        <h4>Welcome to Movie list. </h4>
        <h5>Featured Movies</h5>
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
      </div>
    ) : (
      <h1>Loading!!</h1>
    );
  }
  
  export default Homepage;