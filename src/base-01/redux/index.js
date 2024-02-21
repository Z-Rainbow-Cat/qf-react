import React, { Component } from 'react'
import Router01 from "./router01"
import TabBar from './compoments/TabBar'
import store from "./redux/store"
export default class IndexRouter extends Component {
  constructor(){
    super();
    this.state = {
      showTab:true,
    }
  }
  componentDidMount(){
    store.subscribe(()=>{
      let { show } = store.getState();
      this.setState({
        showTab:show
      })
    })
  }
  render() {
    return (
      <div>
            <Router01>
                {this.state.showTab && <TabBar/> }
            </Router01>
      </div>
    )
  }
}
