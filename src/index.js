import React from 'react';
import ChatApp from './App.js';
import ReactDOM from 'react-dom';
import reducers from './reducers/index.js';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

const store = createStore(reducers);

ReactDOM.render(
  <Provider store={store}>
    <ChatApp />
  </Provider>,
  document.getElementById('root')
)
