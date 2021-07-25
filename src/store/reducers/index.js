import { combineReducers } from 'redux';

import moviesAll from './moviesAll';

export default combineReducers({
    movies: moviesAll,
});