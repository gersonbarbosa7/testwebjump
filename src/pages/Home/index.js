import React from 'react';
import { Container } from './styles';
import MovieList from '../../components/MovieList'

const Home = () => {
  return <Container>
          <MovieList />
        </Container>;
}

export default Home;