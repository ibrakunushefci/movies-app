import React from 'react';
import Moment from 'react-moment';
import 'moment-timezone';

import { IMAGE_BASE_URL } from '../config';

import { Col } from 'react-bootstrap';
import './Movies.scss';

function MovieCard({result}) {
   return (
      <Col lg={6}>
         <div className="movie-card">
            <div className="image-container">
               <div className="bg-image" style={{backgroundImage: `url(${IMAGE_BASE_URL}/${result.poster_path})`}}/>
            </div>
            <div className="movie-info">
               <div>
                  <a href={`/${result.id}`}>{result.title}</a>
                  <small>Released Date: {<Moment format="DD/MM/YYYY">{result.release_date}</Moment>}</small>
               </div>
               <h2><span>Movie lang: </span>{result.original_language}</h2>
               <h4>Rating: {result.vote_average} / 10</h4>
               <p>{result.overview && result.overview.substr(0, 100)}</p>
               <div className="tags-container">
                  <a href={`/${result.id}`}>READ MORE</a>
               </div>
            </div>
         </div>
      </Col>
   );
}

export default MovieCard;