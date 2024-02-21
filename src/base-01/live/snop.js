import React,{Component} from "react";
import "./snop.css"
export default class App extends Component{
    constructor(){
        super();
        this.state = {
            list:[1,2,3,4,5,6,7,8,9]
        }
    }
    myUl = React.createRef()
    getSnapshotBeforeUpdate(prevProps,prevState){
        // console.log(this.myUl.current.scrollHeight)
        return this.myUl.current.scrollHeight - this.myUl.current.scrollTop;
    }
    componentDidUpdate(prevProps,prevState,value){
        console.log('componentDidUpdate')
        console.log(this.myUl.current.scrollHeight)
        this.myUl.current.scrollTop = this.myUl.current.scrollHeight - value ;
    }
    render(){
        return (
            <div>
                <button onClick={()=>{
                    this.setState({
                        list:[...[11,12,13,14,15,16,17,18,19],...this.state.list]
                    })
                }}>来消息</button>
                <ul style={{height:"500px",overflow:'auto'}} ref={this.myUl}>
                    {
                        this.state.list.map((item)=>(
                            <li key={item} style={{height:"200px",margin:"5px",border:'1px solid #222'}}>{item}</li>
                        ))
                    }
                </ul>
            </div>
        )
    }
}