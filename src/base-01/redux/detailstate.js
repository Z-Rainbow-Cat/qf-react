import React, { useState,useEffect } from 'react'
import axios from "axios"
import store from "./redux/store"
export default function Detail(props) {
    const [list,setList] = useState([])
    useEffect(()=>{
        axios({
            url:`https://m.maizuo.com/gateway/?cinemaId=${props.location.state.cinemaId}&k=9346204`,
            method:"get",
            headers:{
                'X-Client-Info':'{"a":"3000","ch":"1002","v":"5.2.1","e":"1707029283475508714242049"}',
                'X-Host':'mall.film-ticket.film.cinema-show-film'
            }
        }).then(({data})=>{
            setList(data.data.films)
        })
    },[props.location.state.cinemaId])
    useEffect(()=>{
        store.dispatch({
            type:"hide-tabbar",
        })
        return ()=>{
            store.dispatch({
                type:"show-tabbar",
            })
        }
    },[])
    return (
        <div>
            <ol>
                {
                    list.map((item)=>(
                        <li key={item.filmId}>{item.name}</li>
                    ))
                }
            </ol>
        </div>
    )
}
