import React, { Component } from 'react'
import axios from "axios"
import Style from "./home.module.css"
export default class home2 extends Component {
    componentDidMount(){
        console.log(1)
        axios.get('/ajax/mostExpected?limit=10&offset=0&token=&optimus_uuid=ABE0CF60D08C11EE9CEC07BF784BA3B61C62C80AB738433CAC089651BF83CFAF&optimus_risk_level=71&optimus_code=10',{
            header:{'Cookie':"_lxsdk_cuid=18dca9cfb42c8-06b3d3328f0bf9-4c657b58-1bcab9-18dca9cfb4286; Hm_lvt_703e94591e87be68cc8da0da7cbd0be2=1708501302; ci=73%2C%E9%83%91%E5%B7%9E; featrues=[object Object]; uuid_n_v=v1; iuuid=ABE0CF60D08C11EE9CEC07BF784BA3B61C62C80AB738433CAC089651BF83CFAF; _last_page=c_dmLad; _lx_utm=utm_source%3Dbing%26utm_medium%3Dorganic; _lxsdk=ABE0CF60D08C11EE9CEC07BF784BA3B61C62C80AB738433CAC089651BF83CFAF; selectci=; Hm_lpvt_703e94591e87be68cc8da0da7cbd0be2=1708501901; latlng=34.747395%2C113.760611%2C1708501923031; _lxsdk_s=18dca9cfb43-803-0b3-18%7C%7C51"}
        }).then((result)=>{
            console.log(result.data)
        })
    }
    render() {
        return (
        <div id={Style.home2}>home2</div>
        )
    }
}
