import React, { Component } from 'react'
import PropTypes from "prop-types"
class Field extends Component{
    static propTypes = {
        type:PropTypes.string,
        label:PropTypes.string,
        changeHandle:PropTypes.func,
        value:PropTypes.string
    }
    static defaultProps = {
        type:"text",

    }
    render(){
        const {type , label, changeHandle ,value} = this.props
        return (
            <div>
                <label>{label}</label>
                <input type={type} value={value} onChange={(e)=>
                    changeHandle(e.target.value)
                }/>
            </div>
        )
    }
}

export default class Login extends Component {
    constructor(){
        super();
        this.state = {
            username:"zhouyl01",
            password:"123456",
        }
    }

    render() {
        return (
        <div>
            <h1>登录</h1>
            <Field label="用户名" type="text" value={this.state.username} changeHandle={(value)=>{
                this.setState({
                    username:value,
                })
            }}/>
            <Field label="密码" type="password" value={this.state.password} changeHandle={(value)=>{
                this.setState({
                    password:value,
                })
            }}/>
            <button onClick={this.login}>login</button>
            <button onClick={this.regist}>regist</button>
        </div>
        )
    }
    login = () =>{
        console.log(this.state.username,this.state.password)
    }
    regist = () =>{
        this.setState({
            username:"",
            password:""
        })
    }
}
