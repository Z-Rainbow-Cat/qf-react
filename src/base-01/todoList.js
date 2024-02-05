import React, { Component } from 'react'

export default class todoList extends Component {
    constructor(){
        super();
        this.state = {
            todoList:[
                {
                    id:1,
                    text:"111111",
                },
                {
                    id:2,
                    text:"222222",
                },
                {
                    id:3,
                    text:"333333",
                }
            ],
            title:"",
        }
    }
    // myInput = React.createRef();
    render() {
        return (
        <div>
            <div>
                <input value={this.state.title} onChange={(e)=>this.inputChange(e)}/>
                <button onClick={()=>this.addTodo()}>添加</button>
            </div>

            <div>
                <ul>
                    {
                        this.state.todoList.map((item)=>
                            (
                                <li key={item.id}>{item.text}-----<button onClick={()=>this.deleteTodo(item.id)}>删除</button></li>
                            )
                        )
                    }
                </ul>
                {
                    this.state.todoList.length === 0 ? <div>暂无代办信息</div> :"" 
                }
                {
                    // <span dangerouslySetInnerHTML = {
                    //     {
                    //         __html : html 片段    显示html   类似vue   v-html
                    //     }
                    // }></span>
                }
            </div>
        </div>
        )
    }

    addTodo = () =>{
        this.setState({
            todoList:[...this.state.todoList,{id:this.state.todoList.length + 1,text:this.state.title}],
            title:""
        })

        // this.myInput.current.value = "" ;

        this.setState({
            title:""
        })
    }

    inputChange = (e) =>{
        this.setState({
            title:e.target.value
        })
    }

    deleteTodo(uid){
        this.setState({
            todoList:this.state.todoList.filter(({id})=>id !== uid)
        })
    }
}
