import React, { Component } from 'react'

export default class state extends Component {

    constructor(){
        super();
        this.state = {
            text:"收藏"
        }
    }
    // 两种写法
    // state = {
    //     text:"收藏"
    // }
    render() {
        return (
        <div>
            <h1>
                welcom to react
            </h1>
            <button onClick={ ()=>this.changeState()}>{ this.state.text}</button>
        </div>
        )
    }
    changeState = () =>{
        this.setState({
            text:this.state.text === "取消收藏" ?"收藏" :"取消收藏"
        })
    }
}
