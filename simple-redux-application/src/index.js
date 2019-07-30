import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { combineReducers, createStore } from 'redux';


const allReducers = combineReducers(
    {
        products: productsReducer,
        users: usersReducer
    }
);

const store = createStore(
    allReducers,
    {
        products: [{ name: 'IPhone' }],
        users: 'Shubham'
    },
    window.devToolsExtension && window.devToolsExtension()

);

console.log(store.getState());

function productsReducer(state = [], action) {

    return state;
}

function usersReducer(state = '', action) {
    switch (action.type) {
        case 'updateUser':
            return action.payload;
    }
    return state;
}
// actionCreator
const updateUserAction = {
    type: 'updateUser',
    payload: {
        user: 'ShubhamKushwaha'
    }
};
store.dispatch(updateUserAction);
console.log(store.getState());
ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker.register();
