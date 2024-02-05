import React,{Component} from "react"
import "./bus.css"
const bus = {
    list:[],

    subscribr(callback){
        this.list.push(callback)
    },

    public(text){
        this.list.forEach((callback)=>{
            callback && callback(text);
        })
    }
}

export default class Bus extends Component{
    render(){
        return(
            <div className="bus">
                <div>
                    <List/>
                </div>
                <div>
                    <Info/>
                </div>
            </div>
        )
    }
}

class List extends Component{
    constructor(){
        super()
        this.state = {
            list:[11111,22222,33333,44444,55555,66666,77777,888888,99999]
        }
        
    }
    render(){
        return (
            <div>
                <ul>
                    {
                        this.state.list.map((item)=>(
                            <li onClick={()=>this.goInfo(item)}>{item}</li>
                        ))
                    }
                </ul>
            </div>
        )
    }
    goInfo = (text) =>{
        bus.public(text)
    }
}

class Info extends Component{
    constructor(){
        super()
        this.state = {
            text :""
        }
        bus.subscribr((text)=>{
            this.setState({
                text:text
            })
        })
    }
    render(){
        return(
            <div>{this.state.text}</div>
        )
    }
}