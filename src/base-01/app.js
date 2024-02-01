import React, {Component} from "react"
import NavBar from "./nav-bar.js"
import Swiper from "./swiper.js"
import Footer from "./footer.js"

export default class App extends Component{
    render(){
        return(
            <div>
                <NavBar/>

                <Swiper/>

                <Footer/>
            </div>
        )
    }
}