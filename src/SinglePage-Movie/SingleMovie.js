import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Col } from 'react-bootstrap';
import Moment from 'react-moment';
import 'moment-timezone';

import { API_BASE_URL, IMAGE_BASE_URL, MOVIE_ID, API_KEY } from '../config';

import './SingleMovie.scss';

function SingleMovie() {
   const [data, setData] = useState([]);

   useEffect(() => {
      const fetchData = async () => {
         const result = await axios.get(`${API_BASE_URL}/3/movie/${MOVIE_ID}?api_key=${API_KEY}`);
         setData(result.data);
      };
      
      fetchData();
   }, []);

   return (
      <Col sm={12}>
         <div className="container">
            <div className="row bg-color mt-4 mb-4 pt-3 pb-3 box-shadow">
               <div className="col-md-4 col-sm-12 p-md-4 vertical-center mb-md-0 mb-2">
                  <img className="img-fluid img-thumbnail" src={`${IMAGE_BASE_URL}/${data.poster_path}`} alt=""/>
               </div>

               <div className="col-md-8 col-sm-12 p-md-4 vertical-center">
                  <h1 className="h3 text-dark text-center pt-3 pb-3 mb-0 mark movie-name">{data.title}</h1>
                  
                  <ul className="list-group">
                     <li className="list-group-item"><span className="font-weight-bold">Runtime: </span>{data.runtime} minutes</li>
                     <li className="list-group-item"><span className="font-weight-bold">Status: </span>{data.status}</li>
                     <li className="list-group-item"><span className="font-weight-bold">Release Date: </span>{<Moment format="DD/MM/YYYY">{data.release_date}</Moment>}</li>
                     <li className="list-group-item">
                        <img src="https://yts.am/assets/images/website/logo-imdb.svg" className="imdb-logo" alt=""/>
                        <span className="sr-only"> IMDb Rating</span><span>{data.vote_average}<i className="fa fa-star"></i></span>
                     </li>
                     <li className="list-group-item"><span className="font-weight-bold">Description: </span>{data.overview}</li>
                  </ul>

                  <button type="button" className="btn btn-warning w-100 text-dark mt-2" data-toggle="modal" data-target="#movieTrailer">
                     <i className="fa fa-file-video"></i> {data.tagline}
                  </button>
               </div>
            </div>
         </div>
      </Col>
   );
}

export default SingleMovie;