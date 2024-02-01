import React, { Component } from 'react'
import "./css/swiper.css"

export default class Swiper extends Component {
  render() {
    let obj = {
      color:"red",
      backgroundColor:"blue"
    }
    return (
      <div>
        {10 + 20}
        <div style={obj}>111</div>
        <div className="active">2222</div>
        <label htmlFor="username">用户名</label>
        <input id="username"/>
      </div>
    )
  }
}
