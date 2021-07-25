import { createStore, applyMiddleware } from 'redux';
import reducers from '../store/reducers'
import thunk from 'redux-thunk'

const createStoreMiddleware = applyMiddleware(
    thunk,
)(createStore)

const store = createStoreMiddleware(reducers);

export default store;