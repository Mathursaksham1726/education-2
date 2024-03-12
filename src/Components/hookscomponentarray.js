import React, { useState } from 'react'

function Hooksarray(){
    const[arr,setArr]=useState([])
     function increase(){
        setArr([...arr,{id:arr.length,value:Math.floor(Math.random()*10)+1}])
    }
    return(
        
      
        <div>
            <button onClick={increase}>add num</button>
           
        {
           
            arr.map((ma)=>{
               return <h2 >{ma.value}</h2>;
            })
            
        }
        
        </div>
    )
}
export default Hooksarray