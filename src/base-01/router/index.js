import React, { Component } from 'react'
import Router01 from "./router01"
import TabBar from './compoments/TabBar'
export default class IndexRouter extends Component {
  render() {
    return (
      <div>
            <Router01>
                <TabBar/>   
            </Router01>
      </div>
    )
  }
}
