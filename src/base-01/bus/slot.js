import React,{Component} from "react"

class Child extends Component{
    render(){
        return(
            <div>
                {this.props.children}
            </div>
        )
    }
}
const Son = (props) =>{
    return (
        <div>
            {props.children}
        </div>
    )
}
export default class Slot extends Component{
    render(){
        return (
            <div>
                <Child>
                    <div>children</div>
                </Child>
                <Son>
                    <div>son</div>
                </Son>

            </div>
        )
    }
}

// 插槽功能   会把子组件内的元素渲染   props.children位置  ,可以获取父组件的状态   但是好像没有具名插槽  