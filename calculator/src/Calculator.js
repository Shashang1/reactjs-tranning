/* eslint no-eval: 0 */
import React from 'react';

import './index.css';

import App from './App.js'

class Calculator extends React.Component{

  constructor(props){
    super(props);
    this.state = {exp:""}; 

  }  

  add = (value)=>{
    this.setState({exp:this.state.exp+value})
    document.getElementById("inp").value = this.state.exp+value;
  }

  calculate = ()=>{
    try{
      this.setState({exp:eval(this.state.exp)})
      document.getElementById("inp").value=eval(this.state.exp)
    }catch(e){
      document.getElementById("inp").value = "error";
    }
  
  }
  reset = () =>{
    this.setState({exp:""});
    document.getElementById("inp").value="";
  }
    
  render(){
    return( 
      
    <div className="container">
      
     <input type ='text' id='inp'/>
      <div>
        <App addFunc={this.add} calculate={this.calculate} reset={this.reset}/>
      </div>
    </div> 
    )
  }
}

export default Calculator;  