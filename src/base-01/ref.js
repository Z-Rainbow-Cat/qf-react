import React, { Component } from 'react'

export default class ref extends Component {
    myref = React.createRef();
    render() {
        return (
        <div>
            <input ref={this.myref}/>
            <button onClick={()=>{console.log(this.myref.current.value)}}>add</button>
        </div>
        )
    }
}
