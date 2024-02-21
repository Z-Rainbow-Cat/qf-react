import React,{ Component } from "react";

export default class Live extends Component{
    constructor(){
        super();
        this.state = {
            text : "lixiaofang"
        }
    }

    componentDidMount(){
        console.log("did mounte")
    }

    UNSAFE_componentWillUpdate(){
        console.log("will update")
    }

    componentDidUpdate(){
        console.log("did Update")
    }
    //性能优化相关   生命周期   控制render渲染    返回false   render 不执行   ，返回 true   render正常执行   ，
    shouldComponentUpdate(nextProps,nextState){
        if(this.state.text !== nextState.text){
            return true;
        }
        return false;
    }
    render(){
        console.log("render")
        return (
            <div onClick={()=>this.setNum()}>{this.state.text}</div>
        )
    }

    setNum = () =>{
        this.setState({
            text:'zhouyongli'
        })
    }
}
