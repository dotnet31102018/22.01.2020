import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
// the provider will wrap our App component
// will provide our applciation with the store
import rootReducer from './reducers/rootReducer';

const postStore = createStore(rootReducer)

fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())
  .then(json => postStore.dispatch({
    type: 'AJAX_POSTS',
    data: json
  }))

/*
fetch('http://localhost:49813/api/values')
  .then(response => response.json())
  .then(json => console.log(json))
*/

// how do we associate how store with react? second package
ReactDOM.render(<Provider store={postStore}><App /></Provider>,
  document.getElementById('root'));
