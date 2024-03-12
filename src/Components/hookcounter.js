import React,{useState} from 'react'

function Hookscounter(){
    const[count,setcount]=useState(0)
    return(
         <button onClick={()=>{
            setcount(count+1)
         }}>Click me times {count}</button>
        // <button onClick={setcount}>Click me times{count}</button>
    )
}
export default Hookscounter