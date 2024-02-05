
import React from "react"

import { createRoot } from "react-dom/client"
// import App from "./base-01/app.js"
// import App from "./base-01/ccomp01.js"
// import App from "./base-01/func01.js"
// import App from "./base-01/ref"
// import App from "./base-01/state"
// import App from "./base-01/list"
// import App from "./base-01/todoList"
// import App from "./base-01/tabs"     
// import App from "./base-01/form/Login"     //form表单  通过父子传参 
// import App from "./base-01/bus/bus"             //通过bus  发布订阅传递参数
// import App from "./base-01/bus/context"             //通过bus  发布订阅传递参数
import App from "./base-01/bus/slot"


const container = document.getElementById("root")
const root = createRoot(container);
root.render(<App/>)


//17版本写法
// import ReactDom from "react-dom"
// ReactDom.render(
//     <App/>,
//     document.getElementById("root")
// )