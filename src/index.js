import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import cakeApp from './cakes/reducers';
import { fetchCakes } from './cakes/actions/cakes';
import ReduxThunk from 'redux-thunk'

const initialState = {
  cakes: []
};

let store = createStore(cakeApp, initialState, applyMiddleware(ReduxThunk));
console.log(store.getState());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

store.dispatch(fetchCakes())
