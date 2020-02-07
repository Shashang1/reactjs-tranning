import React from 'react';
import '../App.css';
import Footer from './footer'
import AddTodo from '../containers/addTodo';
import VisibleTodo from '../containers/visibleTodo';

function App() {
  return (
    <div className="container">
      <AddTodo />
      <VisibleTodo />
      <Footer />
    </div>
  );
}

export default App;
