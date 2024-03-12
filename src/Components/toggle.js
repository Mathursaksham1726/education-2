import React, { useState } from 'react'
import Useeffect2 from './useEfffect2'
import Withclasseffet from './withhelpclasseffect1'
function Toggle (){
    const [display,setdisplay]=useState(true)
    return(
        <div>
        <button onClick={()=>setdisplay(!display)}>clicked me</button>
        {display && <Withclasseffet/>}
        </div>
    )
}
export default Toggle