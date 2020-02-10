import React from 'react';
import './App.css';
import { createStore, applyMiddleware } from 'redux';
import {quotes, initialState} from './reducer';
import thunk from 'redux-thunk';
import { getQuoteAction } from './actions';
import MainView from './container/MainView';
import { Provider } from 'react-redux';

const store = createStore(quotes,initialState, applyMiddleware(thunk));

store.dispatch(getQuoteAction())


function App() {
  return (
    <Provider store={store}>
      <MainView />
    </Provider>
  )
}

export default App;
