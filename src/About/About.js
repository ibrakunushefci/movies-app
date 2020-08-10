import React from 'react';
import { Container } from 'react-bootstrap';

const About = () => (
   <Container>
      <h4 className="mt-5 text-center text-info">API used for this app:
         <a href="https://www.themoviedb.org/" className="text-info" target="_blank" rel="noopener noreferrer"> The Movie Database</a>
      </h4>
   </Container>
)

export default About;