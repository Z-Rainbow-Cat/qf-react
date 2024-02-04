import React, { Component } from 'react'
import NavBar from "./navbar"
import Slidebar from './slidebar'
import Login,{Form1} from "./form"


export default class my extends Component {
  render() {
    return (
      <div>
        <NavBar title="我的" leftShow={false}/>
        <Form1/>
        <Login/>
        <Slidebar bg="blue" position="right"/>
      </div>
    )
  }
}
