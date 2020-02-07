import React from 'react';
import './App.css';
import { createStore, applyMiddleware } from 'redux';
import {quotes, initialState} from './reducer';
import thunk from 'redux-thunk';
import { getQuoteAction } from './actions';

const store = createStore(quotes,initialState, applyMiddleware(thunk));
console.log(store.getState());

store.subscribe(()=>{
  if(store.getState().status==="waiting"){
    console.log("Loading")
  }
  else if(store.getState().status==="received"){
    console.log(store.getState().data[0])
  }
})

store.dispatch(getQuoteAction())


function App() {
  return (
    <div className="App">
      Check console
    </div>
  );
}

export default App;
