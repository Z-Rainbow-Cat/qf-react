import React,{Component} from "react"
import { HashRouter as Router,Route,Redirect,Switch } from "react-router-dom"
import My from "./my"
import Movie from "./movie"
import Home from "./home"
import Detail from "./detail"
import Detailquery from "./detailquery"
import Detailstate from "./detailstate"
import NotFound from "./notfound"
import Login from "./login"
export default class App extends Component{
    constructor(){
        super();
        this.state = {
            a:1,
        }
    }
    render(){
        return(
            <Router>
                {/* <Routes> */}
                {this.props.children}
                <Switch>
                    <Route path="/home" component={Home}/>
                    <Route path="/movie" component={Movie}/>
                    <Route path="/my" render={(props)=>localStorage.getItem("zylToken") === "yes" ? <My {...props}/>:<Redirect to="/login"/>}/>
                    <Route path="/detail/:cinemaId" component={Detail}/>
                    <Route path="/detailquery" component={Detailquery}/>
                    <Route path="/detailstate" component={Detailstate}/>
                    <Route path="/login" component={Login}/>
                    <Redirect from="/" to="/movie" exact/>
                    <Route component={NotFound}/>
                </Switch>
                {/* </Routes> */}
            </Router>
            // <div>Router</div>
        )
    }
}