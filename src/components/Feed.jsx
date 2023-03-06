import { useState, useEffect } from 'react';
import { Box, Stack, Typography } from '@mui/material';
import { Sidebar, Videos } from './';
import fetchFromAPI from '../utils/fetchFrom API';

const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState('New');
  const [movies, setMovies] = useState([])
  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`)
      .then(data=>{setMovies(()=>data.items)})
      .catch(e=>console.error(e))
  }, [selectedCategory]);
  return (
    <Stack sx={{ flexDirection: { sx: 'column', md: 'row' } }}>
      <Box
        sx={{
          height: { sx: 'auto', md: '92vh' },
          borderRight: '1px solid #3d3d3d',
          px: { sx: 0, md: 2 },
        }}
      >
        <Sidebar setSelectedCategory={setSelectedCategory}/>
        <Typography
          className="copyright"
          variant="overline"
          sx={{ mt: 1.5, color: '#fff' }}
        >
          Copyright 2023 Tek
        </Typography>
      </Box>
      <Box p={2} sx={{ overflowY: 'auto', height: '90vh', flex: 2 }}>
        <Typography
          variant="h4"
          sx={{ color: 'white' }}
          mb={2}
          fontWeight="bold"
        >
          {selectedCategory} <span style={{ color: '#F31503' }}>videos</span>
        </Typography>
        <Videos
          videos={movies}
        />
      </Box>
    </Stack>
  );
};

export default Feed;
