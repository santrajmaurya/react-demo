import React from 'react';
import ReactDOM from 'react-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';

import * as serviceWorker from './serviceWorker';

import App from './components/App';
import Main from './components/Main';
import UsersList from './components/UsersList';

import { userReducer } from './reducer/reducers';
import { counterReducer } from './reducer/counterReducer';

const rootReducer = combineReducers({
    userReducer : userReducer,
    counterReducer : counterReducer
});

const store = createStore(rootReducer, 
    applyMiddleware(thunk)
);

const app = (
    <Provider store={store}>
        <UsersList />
    </Provider>
);

ReactDOM.render(app, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
