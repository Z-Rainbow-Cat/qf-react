import React, { Component } from 'react'
import PropTypes from "prop-types"
export default class navbar extends Component {
    //prop属性检查

    static propTypes = {
        title:PropTypes.string,
        leftShow:PropTypes.bool,
        event:PropTypes.func,
    }
    static defaultProps = {
        leftShow:true
    }
    render() {
        let { title ,leftShow,event } = this.props ;
        return (
            
        <div>
            { leftShow ? <button onClick={()=>event()}>showslider</button> :""}
            <span>{title}</span>
        </div>
        )
    }
}
