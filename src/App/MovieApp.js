import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MovieCard from './MovieCard';
import SearchInput from '../Search/SearchInput';

import { API_BASE_URL, API_KEY } from '../config';

import { Container, Row } from 'react-bootstrap';
import './Movies.scss';

function MovieApp() {
   const [data, setData] = useState({ results: [] });
 
   useEffect(() => {
      const fetchData = async () => {
         const result = await axios.get(`${API_BASE_URL}/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`);
         setData(result.data);
      };
  
      fetchData();
   }, []);

   
   return (
      <Container>
         <SearchInput />

         <Row className="moviesWrapper">
            <div className="col-12"><h4 className="text-info">Popular Movies</h4></div>

            {data.results.map(result => (
               <MovieCard key={result.id} result={result} />
            ))}
         </Row>
      </Container>
   );
}
 
export default MovieApp;