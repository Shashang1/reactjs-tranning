import React from 'react';
import {Link, BrowserRouter as Router, Switch, Route, useRouteMatch} from 'react-router-dom';
import {Data} from './data.js';

export function Display(props){
  let data = props.data;
  let match = useRouteMatch()
  
  if(data.length > 0 ){
    let arr = data.map((value)=><Link to={`${match.url}/${value.id}`} key={value.id}><li className="list-group-item">Id {value.id}</li></Link>)
    return  (
      <Router>
        <ul className="list-group">
          {arr}
        </ul>
        
        <Switch>
          <Route path={`${match.url}/:id`}>
            <Data arr={data}/>
          </Route>
        </Switch>
      </Router>
    )
  }
  
  return <h1>No data</h1>
} 
