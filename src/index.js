import React from 'react';
import ReactDOM from 'react-dom';
import MovieApp from './App/MovieApp';
import Navbar from './Navbar/Navbar';
import About from './About/About';
import SingleMovie from './SinglePage-Movie/SingleMovie';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.scss';

ReactDOM.render(
   <Router>
      <Navbar />

      <Switch>
         <Route exact path="/">
            <MovieApp />
         </Route>
         <Route path="/about">
            <About />
         </Route>
         <Route path="/:movieId">
            <SingleMovie />
         </Route>
      </Switch>
   </Router>,
document.getElementById('root'));