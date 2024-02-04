import React, { Component } from "react"
import "./css/tabs.css"
import Home from "./tabs/home"
import Movie,{NewMovie} from "./tabs/movie"
import My from "./tabs/my"
export default class tabs extends Component{
    state = ({
        list:[
            {id:1,text:"电影"},
            {id:2,text:"影院"},
            {id:3,text:"新影院"},
            {id:4,text:"我的"},
        ],
        activeId:1,
    })
    render(){
        return (
            <div>
                <div>
                    {
                        this.state.activeId === 1 && <Home/>
                      
                    }
                    {
                        this.state.activeId === 2 && <Movie/>
                    }
                    {
                        this.state.activeId === 3 && <NewMovie/>
                    }
                    {  
                        this.state.activeId === 4 && <My/>
                    }
                </div>
                <ul>
                    {
                        this.state.list.map((item)=><li key={item.id} className={this.state.activeId===item.id ? "active" :""} onClick={()=>this.tabsChange(item.id)}>{item.text}</li>)
                    }
                </ul>
            </div>
        )
    }

    tabsChange = (id) =>{
        this.setState({
            activeId : id ,
        })
    }
}