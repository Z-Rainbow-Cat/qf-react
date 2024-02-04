import React, { Component } from 'react'
import NavBar from "./navbar"
import Slidebar from './slidebar'
export default class home extends Component {
  render() {
    return (
      <div>
            <NavBar title="首页"  leftShow={false}/>
            <Slidebar bg="yellow" position="left"/>
            
      </div>
    )
  }
}
