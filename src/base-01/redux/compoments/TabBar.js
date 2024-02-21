import React, { Component } from 'react'
import Style from "./tabbar.module.css" 
import { NavLink } from 'react-router-dom'
export default class TabBar extends Component {
  render() {
    return (
        <div className={Style.tabbar}>
            <ul>
                <li>
                    <NavLink to="/home" activeClassName={Style['tabbar-active']}>home</NavLink>
                </li>
                <li>
                    <NavLink to="/movie" activeClassName={Style['tabbar-active']}>movie</NavLink>
                </li>
                <li>
                    <NavLink to="/my" activeClassName={Style['tabbar-active']}>my</NavLink>
                </li>
            </ul>
        </div>
    )
  }
}
