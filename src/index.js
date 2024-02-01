
import React from "react"

import App from "./base-01/app.js"
import { createRoot } from "react-dom/client"
// import App from "./base-01/ccomp01.js"
// import App from "./base-01/func01.js"

const container = document.getElementById("root")
const root = createRoot(container);
root.render(<App/>)


//17版本写法
// import ReactDom from "react-dom"
// ReactDom.render(
//     <App/>,
//     document.getElementById("root")
// )