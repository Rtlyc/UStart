import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state ={
      firstNum:"",
      secondNum:"",
      operator:"",
      output:""
    };
  }

  handleresult=(e)=>{
    console.log(this.state.operator)
    this.setState({operator:e.target.value})
    let operator = this.state.operator;
    let prefix = this.state.firstNum+operator+this.state.secondNum+"=";
    if(operator==="+"){
      this.setState({output:prefix+(parseFloat(this.state.firstNum)+parseFloat(this.state.secondNum))})
    } else if(operator==="-"){
      this.setState({output:prefix+(parseFloat(this.state.firstNum)-parseFloat(this.state.secondNum))})
    } else if(operator==="*"){
      this.setState({output:prefix+(parseFloat(this.state.firstNum)*parseFloat(this.state.secondNum))})
    } else if(operator==="/"){
      if(this.state.secondNum!==0){
        this.setState({output:prefix+(parseFloat(this.state.firstNum)/parseFloat(this.state.secondNum))})
      }else{
        this.setState({output:prefix+"Divide By Zero Error"})
      }
    }
    this.render()
  }

  handlefirstnum=e=>{
    this.setState({firstNum: e.target.value});
  }

  handlesecondnum=e=>{
    this.setState({secondNum: e.target.value});
  }

  render() {
    return (
      <div className="App">
        <div className="Calculator_wrapper">
          <h1 className="calName">Simple React Calculator</h1>
          <form>
            <div className="row">
              <input type="text" onChange={this.handlefirstnum}/>
            </div>
            <div className="row">
              <input type="text" onChange={this.handlesecondnum}/>
            </div>
            <div className="row">
              <button type='button' onClick={this.handleresult} value='+'>+</button>
              <button type='button' onClick={this.handleresult} value='-'>-</button>
              <button type='button' onClick={this.handleresult} value='*'>*</button>
              <button type='button' onClick={this.handleresult} value='/'>/</button>
            </div>
          </form>
          <div className="result">Result:{this.state.output}</div>
        </div>
      </div>
    );
  }
}

export default App;
