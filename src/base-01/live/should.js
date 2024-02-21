import React,{Component} from "react";

class Child extends Component{
    // 可以用来优化性能 ，根据数据是否重新执行render   可以减少render执行的次数  
    shouldComponentUpdate(nextProps){
        if(this.props.current === this.props.index ||  nextProps.current === nextProps.index ){
            return true;
        }
        return false;
    }
    render(){
        console.log("child-render")
        const {current , index,text,event} = this.props;
        return (
            <li style={{width:'100px',border:current===index? '1px solid  blue':'1px solid red'}} onClick={()=>event(index)}>{text}</li>
        )
    }
}
export default class Should extends Component{
    constructor(){
        super();
        this.state = {
            list:[1,2,3,4,5,6,7,8,9,0,11,22,33,44,55,66,77,88,99],
            current:0,
        }
    }
    render(){
        return (
            <div>
                <ul style={{float:"left"}}>
                    {
                        this.state.list.map((item,index)=>(
                            <Child key={index} text={item}  index={index} current={this.state.current} event={(value)=>{
                                this.setState({
                                    current:value
                                })
                            }}>{item}</Child>
                        ))
                    }
                </ul>
            </div>
        )
    }
}