import React, { Component } from 'react'

//受控组件   把input  看成一个组件  ，value值通过父组件设置 ，
export default class form extends Component {
    state = {
        username:"",
    }
  render() {
    return (
      <div>
        <h1>
            登录
        </h1>

        <input type="text" value={this.state.username} onChange={(e)=>{
            this.setState({
                username:e.target.value,
            })
        }}/>
        <button onClick = {()=>{
            console.log(this.state.username)
        }}>login </button>
        <button onClick={()=>{
            this.setState({
                username:""
            })
        }}>regist</button>
      </div>
    )
  }
}


//费受控组件    直接操作input
export class Form1 extends Component{
    inputRef = React.createRef();
    render(){
        return (
            <div>
              <h1>
                  登录
              </h1>
      
              <input type="text" ref={this.inputRef} defaultValue="fggg"/>
              <button onClick = {()=>{
                  console.log(this.inputRef.current.value)
              }}>login </button>
              <button onClick={()=>{
                  this.inputRef.current.value = "" ;
              }}>regist</button>
            </div>
          )
    }
}
