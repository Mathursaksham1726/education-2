import React, { useEffect, useState } from 'react'

function Useeffect(){
    
    const[s,setcount]=useState(0);
    const[name,setname]=useState('')
    useEffect(()=>{
        
        console.log("useeffect-updating title");
        document.title=`number of times clicked ${s} `
    },[s])
    return(
        <div>
        <input type="text" value={name} onChange={(e)=>{setname({name:e.target.value})}}></input>
        <button onClick={()=>{setcount(s+1)}}>Click button :{s}</button>
        </div>
    )
}
export default Useeffect;
//saksham

////mathur