import { createStore } from "redux";

const reducer = (prevState={show:true},action) =>{
    console.log(action)
    switch(action.type){
        case "show-tabbar" :  return {...prevState,show:true}; 
        case "hide-tabbar" :  return {...prevState,show:false};
        default :return prevState;
    }
}
let store = createStore(reducer)

export default store