import React, { Component } from 'react'
import PropTypes from "prop-types"
export default class navbar extends Component {
    //prop属性检查

    static propTypes = {
        title:PropTypes.string,
        leftShow:PropTypes.bool,
    }
    static defaultProps = {
        leftShow:true
    }
    render() {
        let { title ,leftShow } = this.props ;
        return (
            
        <div>
            { leftShow ? <button>back</button> :""}
            <span>{title}</span>
        </div>
        )
    }
}
