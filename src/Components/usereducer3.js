import React,{useReducer} from "react";
const intialstate=0;
function reducer2(state,action){
    switch(action){
    case "increment2":
        return state+1
        case "decrement2":
            return state-1
    case "reset":
        return intialstate
        default:
            return state
    }
}
function reducer(state,action){
 switch(action){
    case "increment":
        return state+1
        case "decrement":
            return state-1
            case "increment2":
                return state+1
                case "decrement2":
                    return state-1
            case "reset":
                return intialstate
                default:
                    return state

 }
}
function Redur3(){
    const[count,dispatch]=useReducer(reducer,intialstate)
    const[count2,dispatch2]=useReducer(reducer2,intialstate)
    return(
        <div>
            <div>Count-{count}</div>
            <div>Count2-{count2}</div>
            <button onClick={()=>{dispatch("increment")}}>Increment</button>
            <button onClick={()=>{dispatch("decrement")}}>Decrement</button>
            <button onClick={()=>{dispatch2("increment2")}}>Increment2</button>
            <button onClick={()=>{dispatch2("decrement2")}}>Decrement2</button>
            <button onClick={()=>{dispatch("reset")}}>Reset</button>
        </div>
    )
}

export default Redur3;