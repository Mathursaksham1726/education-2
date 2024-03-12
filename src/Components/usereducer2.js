import React,{useReducer} from "react";
const intialstate={
    firstcount:0,
    secondcount:10
};
function reducer(state,action){
 switch(action.type){
    case "increment":
        return {firstcount:state.firstcount+1}
        case "decrement":
            return {firstcount:state.firstcount-1}
            case "increment2":
        return {...state,secondcount:state.secondcount+1}
        case "decrement2":
            return {...state,secondcount:state.secondcount-1}
            case "reset":
                return intialstate
                default:
                    return state

 }
}
function Redur2(){
    const[count,dispatch]=useReducer(reducer,intialstate)
    return(
        <div>
            <div>Count-{count.firstcount}</div>
            <div>Count2-{count.secondcount}</div>
            <button onClick={()=>{dispatch({type:"increment"})}}>Increment</button>
            <button onClick={()=>{dispatch({type:"decrement"})}}>Decrement</button>
            <button onClick={()=>{dispatch({type:"increment2"})}}>Increment2</button>
            <button onClick={()=>{dispatch({type:"decrement2"})}}>Decrement2</button>
            <button onClick={()=>{dispatch({type:"reset"})}}>Reset</button>
        </div>
    )
}

export default Redur2;