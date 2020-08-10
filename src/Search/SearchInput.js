import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MovieCard from '../App/MovieCard';
import { Row, Form, FormControl } from 'react-bootstrap';

import { API_BASE_URL, API_KEY } from '../config';

function SearchInput() {
   const [query, setQuery] = useState('');
   const [results, setResults] = useState([]);

   // FETCH API DATA
   const getMovies = async (query) => {
      const results = await axios.get(`${API_BASE_URL}/3/search/movie?api_key=${API_KEY}&query=${query}`)
      const moviesData = await results.data
      return moviesData.results
   }

   // PREVENTS RERENDER FLICKERING AS USER TYPES IN SEARCH
   const sleep = (ms) => {
      return new Promise(resolve => setTimeout(resolve, ms))
   }
   
   // useEffect - WILL ONLY RERENDER WHEN QUERY IS CHANGED
   useEffect(() => {
      let currentQuery = true
      const controller = new AbortController()
      let elem = document.querySelector('.moviesWrapper')

      const loadMovies = async () => {
         if (!query) return setResults([])
         
         await sleep(350)
         if (currentQuery) {
            const results = await getMovies(query, controller)
            setResults(results)
            
            elem.style.display = 'none'
         }
         if (!currentQuery || !query) {
            elem.style.display = 'flex'
         }
      }
      loadMovies();

      return () => {
         currentQuery = false
         controller.abort()
      }
   }, [query])

   // Render Movies
   let movieComponent = results.map(result => {
      return (
         <MovieCard key={result.id} result={result} />
      )
   })

   return (
      <>
         <Form inline>
            <FormControl 
               type="text"
               value={query}
               onChange={(e) => setQuery(e.target.value)}
               placeholder="Search Movie"
               className="mr-sm-1"
            />
         </Form>

         <Row>
            {movieComponent}
         </Row>
      </>
   )
}

export default SearchInput;