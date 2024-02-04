import React, { Component } from 'react'

export default class list extends Component {
    constructor(){
        super();
        this.state = {
            list:["aa","bb","cc","11","22","33"]
        }
    }
    render() {
        return (
        <div>
            <ul>
                {
                    this.state.list.map((item,index)=>(
                        <li key={index}>{item}</li>
                    ))
                }
            </ul>
        </div>
        )
    }
}
