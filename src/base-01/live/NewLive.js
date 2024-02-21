

import React,{Component} from "react"

export default class App extends Component{
    state = {
        name:"zhouyongli",
        age:"30"
    }
    // UNSAFE_componentWillMount(){
    //     console.log('componentWillMount')
    // }
    // 这个相当于会拦截state的变化
    static getDerivedStateFromProps(nextProps,nextState){
        console.log(nextState)
        console.log("getDerivedStateFromProps")
        return {
            name:nextState.name.substr(0,1).toUpperCase() + nextState.name.substr(1)
        }
    }
    render(){
        return(

            <div>新的生命周期{this.state.name}---{this.state.age}
                <button onClick={()=>{
                    this.setState({
                        name:"lixiaofang"
                    })
                }}>aasasa</button>
            </div>
        )
    }
}