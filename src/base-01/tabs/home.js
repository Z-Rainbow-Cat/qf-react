import React, { Component } from 'react'
import NavBar from "./navbar"
import Slidebar from './slidebar'
export default class home extends Component {
  constructor(){
    super();
    this.state = {
      show:true
    }
  }
  toShowOrHidSlider = () =>{
    this.setState({
      show:!this.state.show
    })
  }
  render() {
    return (
      <div>
            <NavBar title="首页"  leftShow={true} event={this.toShowOrHidSlider}/>
            <Slidebar bg="yellow" position="left" show={this.state.show}/>
      </div>
    )
  }
}

// fuzi通信   通过传递回调函数函数实现类似vue   emit的效果
