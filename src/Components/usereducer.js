import React,{useReducer} from "react";
const intialstate=0;
function reducer(state,action){
 switch(action){
    case "increment":
        return state+1
        case "decrement":
            return state-1
            case "reset":
                return intialstate
                default:
                    return state

 }
}
function Redur(){
    const[count,dispatch]=useReducer(reducer,intialstate)
    return(
        <div>
            <div>Count-{count}</div>
            <button onClick={()=>{dispatch("increment")}}>Increment</button>
            <button onClick={()=>{dispatch("decrement")}}>Decrement</button>
            <button onClick={()=>{dispatch("reset")}}>Reset</button>
        </div>
    )
}

export default Redur;

