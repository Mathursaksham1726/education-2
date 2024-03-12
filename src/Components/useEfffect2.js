import React, { useEffect, useState } from 'react'
function Useeffect2(){
    const[x,setx]=useState(0);
    const[y,sety]=useState(0);
      function capture(e){
        console.log("captured")
          setx(e.clientX);
          sety(e.clientY);
     }
    useEffect(()=>{
         console.log("use effect called");
        // window.addEventListener('mousemove',capture)
        // window.onmousemove=(e)=>{
        //     setx(e.clientX);
        //     sety(e.clientY);
        // }
        window.onmousemove=capture;
        return ()=>{
           console.log("component unmounted");
            window.removeEventListener('mousemove',capture)
        }
    },[])
    return(
      <div>
        Hooks X-{x} and Y-{y}
      </div>
    )
}
export default Useeffect2