import React, { useEffect, useState } from 'react'
import axios from "axios"
import { useHistory } from "react-router-dom"
import Style from "./home.module.css"
export default function Home1(props) {
    const [list,setList] = useState([])
    useEffect(()=>{
        axios({
            method:"get",
            url:"https://m.maizuo.com/gateway?cityId=410100&ticketFlag=1&k=3764514",
            headers:{
                'X-Client-Info':'{"a":"3000","ch":"1002","v":"5.2.1","e":"1707029283475508714242049","bc":"410100"}',
                'X-Host':'mall.film-ticket.cinema.list'
            }
        }).then(({data})=>{
            setList(data.data.cinemas)
        })
    },[])

    const history = useHistory();
    const goDetail = (id) =>{
        // props.history.push(`/detail/${id}`)   或者可以用下边react封装的方法
        //动态路由传参
        // history.push(`/detail/${id}`)
        // query传参
        // history.push({pathname:"/detailquery",query:{cinemaId:id}})
        // state  传参
        history.push({pathname:"/detailstate",state:{cinemaId:id}})

    }
    return (
        <div className={Style.home1}>
            <ol>
                {
                    list.map((item)=>(
                        <li key={item.cinemaId} onClick={()=>goDetail(item.cinemaId)}>
                            <div>{item.name}</div>
                            <div>{item.address}</div>
                        </li>
                    ))
                }
            </ol>
        </div>
    )
}
