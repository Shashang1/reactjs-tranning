import React from 'react';
import './index.css';
import { Button } from './Button.js';
import {ResetBut} from './ResetBut.js';
import {CalcBut} from './CalcBut.js';


class App extends React.Component{
  constructor(props){
    super(props);
    this.state={exp:""};
  }
  
  
  
  

  render(){
    var arr = [1,2,3,4,5,6,7,8,9,0,'+','-','*','/'];
    var array = arr.map((value)=> <Button val={value} addFunc={this.props.addFunc}/>);
    array.push(<ResetBut reset={this.props.reset}/>);
    array.push(<CalcBut calculate={this.props.calculate}/>);
    
    return array
  }
}

export default App;
