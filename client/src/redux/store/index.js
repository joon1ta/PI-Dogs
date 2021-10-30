import {createStore, applyMiddleware, compose} from 'redux';
import rootReducer from '../reducer/index';
import thunk from 'redux-thunk';


const composed = compose(applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export const store = createStore(rootReducer, composed);
