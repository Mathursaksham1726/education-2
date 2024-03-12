import React, { useState } from 'react'

function HooksObject(){
    const[name,setname]=useState({firstName:"",lastName:""})
    return(
        <form>
            <input type="text" value={name.firstName} onChange={(e)=>{setname({...name,firstName:e.target.value})}}/>
            <input type="text" value={name.lastName} onChange={(e)=>{setname({...name,lastName:e.target.value})}}></input>
            <h1>FirstName: {name.firstName}</h1>
            <h2>LastName: {name.lastName}</h2>
            <h1>{JSON.stringify(name)}</h1>
        </form>
    )
}
export default HooksObject;
//kyuki usestate hook ke setter function me automatically merger and updation of object nhi hota ISLIYE MANUALLY KARNA pdhta hai