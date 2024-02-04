import React, { Component } from 'react'
import axios from "axios"
import "../css/tabs.css"
import NavBar from "./navbar"

export default class movie extends Component {
    state = {
        movies:[],
        backmovies:[],
    }
    constructor(){
        super();
        axios({
            method:"get",
            url:"https://m.maizuo.com/gateway?cityId=410100&ticketFlag=1&k=3764514",
            headers:{
                'X-Client-Info':'{"a":"3000","ch":"1002","v":"5.2.1","e":"1707029283475508714242049","bc":"410100"}',
                'X-Host':'mall.film-ticket.cinema.list'
            }
        }).then(({data})=>{
            console.log(data)
            this.setState({
                movies:data.data.cinemas,
                backmovies:data.data.cinemas,
            })
        })
    }
    render() {
        return (
        <div>
            <NavBar title="电影"/>
            <input onInput={this.inputChange}/>
            <div>
                {
                    this.state.movies.map((item)=>(
                        <div key={item.cinemaId} className='info'>
                            <div className='name'>{item.name}</div>
                            <div className='address'>{item.address}</div>
                        </div>
                    ))
                }
            </div>
        </div>
        )
    }
    inputChange = (e) =>{
        let text = e.target.value;
        console.log(text)

        let list = this.state.backmovies.filter((item)=>item.name.includes(text) || item.address.includes(text) )
        this.setState({
            movies:[...list],
        })
    }
}

// 、、优化   受控input   不需要备份数据

export class NewMovie extends Component{
    state = {
        movies:[],
        text:"",
    }
    constructor(){
        super();
        axios({
            method:"get",
            url:"https://m.maizuo.com/gateway?cityId=410100&ticketFlag=1&k=3764514",
            headers:{
                'X-Client-Info':'{"a":"3000","ch":"1002","v":"5.2.1","e":"1707029283475508714242049","bc":"410100"}',
                'X-Host':'mall.film-ticket.cinema.list'
            }
        }).then(({data})=>{
            this.setState({
                movies:data.data.cinemas,
            })
        })
    }
    render(){
        return (
            <div>
                <input value={this.state.text} onChange={(e)=>{
                    this.setState({
                        text:e.target.value,
                    })
                }}/>
                {
                    this.state.movies.filter((item)=>item.name.includes(this.state.text) || item.address.includes(this.state.text)).map((item)=>(
                        <div key={item.cinemaId} className='info'>
                            <div className='name'>{item.name}</div>
                            <div className='address'>{item.address}</div>
                        </div>
                    ))
                }
            </div>
        )
    }
}
