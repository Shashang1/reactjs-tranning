import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';







 class Result extends React.Component{
  constructor(props){
    super(props);
    this.state={exp:"",result:""};
    
  }
  calculate = () =>{
    let expression = document.getElementById("exp").value;
    this.setState({exp:String(eval(expression))});
  }

  reset = () =>{
    this.setState({exp:"",result:""});
  }

  add = (val) =>{
    this.setState({exp:this.state.exp+val});
  }

  back = () => {
    this.setState({exp:this.state.exp.substring(0,this.state.exp.length-1)});
  }
  

  render(){

    return(

      
      <div className="container">
        <input type = "text" id="exp" value={this.state.exp}/>
        
        <input type="button" value="Reset" className = "reset" onClick={this.reset}/>
        
        <br/>
        <div className="outer-but">
          <div className="inner-but">
            <input type="button" value="(" onClick={() => this.add("(")} className="but"/>
            <input type="button" value=")" onClick={() => this.add(")")} className="but"/>
            <input type="button" value="<=" onClick={this.back} className="but"/>
            <input type="button" value="-" onClick={() => this.add("-")} className="but"/>
          </div>
          <div className="inner-but">
            <input type="button" value="7" onClick={() => this.add("7")} className="but"/>
            <input type="button" value="8" onClick={() => this.add("8")} className="but"/>
            <input type="button" value="9" onClick={() => this.add("9")} className="but"/>
            <input type="button" value="*" onClick={() => this.add("*")} className="but"/>
          </div>
          <div className="inner-but">
            <input type="button" value="4" onClick={() => this.add("4")} className="but"/>
            <input type="button" value="5" onClick={() => this.add("5")} className="but"/>
            <input type="button" value="6" onClick={() => this.add("6")} className="but"/>
            <input type="button" value="." onClick={() => this.add(".")} className="but"/>
          </div>
          <div className="inner-but">
            <input type="button" value="1" onClick={() => this.add("1")} className="but"/>
            <input type="button" value="2" onClick={() => this.add("2")} className="but"/>
            <input type="button" value="3" onClick={() => this.add("3")} className="but"/>
            <input type="button" value="0" onClick={() => this.add("0")} className="but"/>
          </div>
          <div>
            <input type="button" value="+" onClick={() => this.add("+")} className="last-but"/>
            <input type="button" value="/" onClick={() => this.add("/")} className="last-but"/>
            <input type="button" value="Result" onClick={this.calculate} className="last-but"/>
          </div>
        </div>
        
        <p id="res">{this.state.result}</p>
        
      
      
      </div>



    
    
    
    )

  }


 };

export default this;
ReactDOM.render(<Result/>, document.getElementById('root'));
