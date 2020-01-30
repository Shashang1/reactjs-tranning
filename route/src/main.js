import React from 'react';
import { Display } from './display';

class Main extends React.Component{
  constructor(props){
    super(props);
    this.state = {data:[]};
    
  }
  
  componentDidMount(){
    fetch(this.props.url)
    .then((data)=>data.json())
    .then((json)=>{this.setState({data:json})})  
  }
  
  render(){
    return <Display data={this.state.data}/>
  }

}

export default Main;

