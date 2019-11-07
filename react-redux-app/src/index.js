// REACT IMPORTS
import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router } from 'react-router-dom';

// REDUX/REACT-REDUX
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

// COMPONENT IMPORTS
import App from './App';
import { reducer as dogReducer } from './reducers/index';

// STYLING
import './index.css';

const rootReducer = combineReducers({
    dog: dogReducer
})

const store = createStore(rootReducer, applyMiddleware(thunk, logger))


ReactDOM.render(
    <Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>, 
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
