import React from 'react';
import {Link, BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {Data} from './data.js';

export function Display(props){
  let data = props.data;
  
  if(data.length > 0 ){
    let arr = data.map((value)=><Link to={`/data/${value.id}`}><li key={value.id} className="list-group-item">Id {value.id}</li></Link>)
    return  (
      <div className="container"> 
        <Router>
        
          <h1 className="bg-primary text-white">Below is the Data:</h1>
          <ul className="list-group">
            {arr}
          </ul>
        
          <Switch>
            <Route path="/data/:id">
              <Data arr={data}/>
            </Route>
          </Switch>
        </Router>
      </div>
    )
  }
  
  return <h1>No data</h1>
} 