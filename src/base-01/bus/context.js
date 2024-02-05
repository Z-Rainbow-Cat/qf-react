import React,{Component} from "react"
import "./bus.css"


const GlobalProvide = React.createContext()
export default class Bus extends Component{
    state = {
        info:"",
    }
    render(){
        return(
            <GlobalProvide.Provider value={{
                name:"asas",
                age:12,
                info:this.state.info,
                onChangeInfo:(value)=>{
                    this.setState({
                        info:value
                    })
                }
            }}>
                <div className="bus">
                    <div>
                        <List/>
                    </div>
                    <div>
                        <Info/>
                    </div>
                </div>
            </GlobalProvide.Provider>
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
            <GlobalProvide.Consumer>
                {
                    (value)=>{
                        const {onChangeInfo} = value ;
                        return (
                            <div>
                                <ul>
                                    {
                                        this.state.list.map((item)=>(
                                            <li onClick={()=>this.goInfo(item,onChangeInfo)}>{item}</li>
                                        ))
                                    }
                                    <li>{value.name}</li>
                                </ul>
                            </div>
                        )
                    }
                }
            </GlobalProvide.Consumer>
            
        )
    }
    goInfo = (text,callback) =>{
        console.log(text)
        callback(text)
    }
}

class Info extends Component{
    constructor(){
        super()
        this.state = {
            text :""
        }
    }
    render(){
        return(
            <GlobalProvide.Consumer>
                {
                    (value)=>(
                        <div>{value.info}</div>
                    )
                }
            </GlobalProvide.Consumer>
        )
    }
}
// 兄弟之间组件传参   类似vue  provide 和  injict  但是又有不同，感觉还是相当去状态提升  修改父组件状态，从而修改子组件状态
// 不同的是，方法不是通过prop 传过去的  俄日是通过GlobalContext.Provide   GlobalProvide.Consumer分别传递和接受的     