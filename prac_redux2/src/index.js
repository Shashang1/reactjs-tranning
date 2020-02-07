import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import {createStore} from 'redux'
import { reduce } from "./reducers";
import { Provider } from 'react-redux';

const store = createStore(reduce);

ReactDOM.render(
  <Provider store={store}>
    <App />
    </Provider>
  , document.getElementById('root'));


