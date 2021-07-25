import React, { useEffect, useState } from 'react';
import { FlatList, ActivityIndicator } from 'react-native';
import MovieItemList from '../../components/MovieItemList';
import { Container, Title } from './styles';
import api from '../../services/api';

const Home = () => {

    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);

    const getList = () => {

        api.get('/movies/trending').then((response) => {
            setMovies(response.data)
        }).catch((err) => {
            console.log(err)
        }).finally(() => {
            setLoading(false)
        })
    }

    const renderItem = ({ item }) => (
        <MovieItemList item={item} />
      );

    useEffect(() => {
        getList();
    },[]);

  return <Container>
        {loading 
        ? <ActivityIndicator size="large" color="#000" /> 
        : <FlatList
            data={movies}
            renderItem={renderItem}
            keyExtractor={(item, index) => index.toString()}
            ListHeaderComponent={<Title>Lista de filmes</Title>}
        />}
        </Container>;
}

export default Home;