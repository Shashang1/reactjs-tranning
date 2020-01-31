import React from 'react'
import { Link, BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Main from './main'

export const App = ()=>{
  return(
    <div className="container">
      
      <Router>
        <ul  className="list-group list-group-horizontal nav">
          <Link to="/"><li className='list-group-item'>Home</li></Link>
          <Link to="/user"><li className='list-group-item'>Users</li></Link>
          <Link to="/posts"><li className='list-group-item'>Posts</li></Link>
          <Link to="/comments"><li className='list-group-item'>Comments</li></Link>
        </ul>
        
        <Switch>
          <Route path="/user" exact>
            <Main url="https://jsonplaceholder.typicode.com/users"/>
          </Route>
          <Route path="/posts" exact>
            <Main url="https://jsonplaceholder.typicode.com/posts"/>
          </Route>
          <Route path="/comments" exact>
            <Main url="https://jsonplaceholder.typicode.com/comments"/>
          </Route>
          <Route path="/" exact>
            <Main url=""/>
          </Route> 
        </Switch>
      </Router>
    </div>
  )
}