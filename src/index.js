import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, combineReducers } from 'redux'
import cakeApp from './cakes/reducers';
import searchApp from './search/reducers';
import { fetchCakes } from './cakes/actions/cakes';
import ReduxThunk from 'redux-thunk'

const initialState = {
  cakes: []
};

const app = combineReducers({
  cakes: cakeApp,
  searchTerm: searchApp
});

let store = createStore(app, initialState, applyMiddleware(ReduxThunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

store.dispatch(fetchCakes());
