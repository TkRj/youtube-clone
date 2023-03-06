import { useState, useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import { useParams } from 'react-router-dom';
import {  Videos } from './';
import fetchFromAPI from '../utils/fetchFrom API';

const SearchFeed = () => {
  const {searchTerm} = useParams();
  const [movies, setMovies] = useState([])
  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`)
      .then(data=>{setMovies(()=>data.items)})
      .catch(e=>console.error(e))
  }, [searchTerm]);
  return (
    <Box p={2} sx={{ overflowY: 'auto', height: '90vh', flex: 2 }}>
    <Typography
      variant="h4"
      sx={{ color: 'white' }}
      mb={2}
      fontWeight="bold"
    >
      Search Results for: <span style={{ color: '#F31503' }}>{searchTerm}</span> videos
    </Typography>
    <Videos
      videos={movies}
    />
  </Box>
  );
};

export default SearchFeed;
