import React, { Component } from 'react'
import NavBar from "./navbar"
import Slidebar from './slidebar'
export default class my extends Component {
  render() {
    return (
      <div>
        <NavBar title="我的" leftShow={false}/>
        <Slidebar bg="blue" position="right"/>

      </div>
    )
  }
}
