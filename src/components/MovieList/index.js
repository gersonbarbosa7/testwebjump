import React, { Component } from 'react'
import {connect} from 'react-redux'
import { FlatList } from 'react-native';
import MovieItemList from '../MovieItemList';
import FlatHeader from '../FlatHeader';
import {getMovies} from '../../store/actions/moviesAction';

 class MovieList extends Component {
    componentDidMount(){
        this.props.getMovies()
        
    }
    
    render() {
        const {movies} = this.props.movies
        
        const renderItem = ({ item }) => (
            <MovieItemList item={item} />
          );
        
        return (
            <>
            <FlatList
                data={movies}
                renderItem={renderItem}
                keyExtractor={(item, index) => index.toString()}
                ListHeaderComponent={<FlatHeader />}
            />
            </>
        )
    }
}

const mapStateToProps  = (state) => ({movies:state.movies})

export default connect(mapStateToProps, {getMovies})(MovieList)