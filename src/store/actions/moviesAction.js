import {GET_MOVIES, MOVIES_ERROR} from '../types'
import api from '../../services/api';

export const getMovies = () => async dispatch => {
    
    try{
        const res = await api.get('/movies/trending')
        dispatch( {
            type: GET_MOVIES,
            payload: res.data
        })
    }
    catch(e){
        dispatch( {
            type: MOVIES_ERROR,
            payload: console.log(e),
        })
    }

}