import React from 'react'

export default function login() {
    const goLogin = () =>{
        console.log(11)
        window.localStorage.setItem("zylToken","yes")
    }
    return (
        <div>
            <div>用户名 <input/></div>
            <div>密码 <input/></div>
            <span onClick={()=>goLogin()}>登录</span>
        </div>
    )
}
