import React, { Component } from 'react'
import Home1 from "./home/home1"
import Home2 from "./home/home2"
import { Route,Redirect,Switch } from "react-router-dom"
import { NavLink } from "react-router-dom"
// import TabBar from './compoments/TabBar'
import Style from "./home/home.module.css"
export default class home extends Component {
  render() {
    return (
        <div className={Style.home}>
            <ul>
                <li>
                    <NavLink to="/home/home1" activeClassName={Style["tabbar-active"]}>卖座影院</NavLink>
                </li>
                <li>
                    <NavLink to="/home/home2" activeClassName={Style["tabbar-active"]}>猫眼待映</NavLink>
                </li>
            </ul>
            <Switch>
                <Route path="/home/home1" component={Home1}/>
                <Route path="/home/home2" component={Home2}/>
                <Redirect from="/home" to="/home/home1"/>
            </Switch>
            {/* <TabBar></TabBar> */}
        </div>
    )
  }
}
