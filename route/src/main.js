import React from 'react';
import { Display } from './display';
import { Home } from './home.js'

class Main extends React.Component{
  constructor(props){
    super(props);
    this.state = {data:[]};
  }
  
  render(){
    if(this.props.url===""){
      return <Home />
    }
    fetch(this.props.url)
    .then((data)=>data.json())
    .then((json)=>{this.setState({data:json})})

    return <Display data={this.state.data}/>
  }
}

export default Main;

