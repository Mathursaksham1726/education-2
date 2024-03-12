import axios from 'axios';
import React,{useState,useEffect} from 'react';


function Fetchdata(){
    const[user,setUser]=useState({});
    const[id,setId]=useState(1);
    const[btnclickid,setidbtnclick]=useState(1);
    let chnHand=()=>{
        setidbtnclick(id);
      }
    useEffect(()=>{
       axios.get(`https://jsonplaceholder.typicode.com/users/${btnclickid}`)
       .then((res)=>{
        console.log(res)
        setUser(res.data)
    },btnclickid)
    .catch((err)=>{
        console.log(err)
    })
      })
      
    return(
        <div>
            <input type="text" value={id} onChange={e=>setId(e.target.value)}/>
            <button type="submit" value={btnclickid} onClick={chnHand}>Clik</button>
            <div>{user.name}</div>
        </div>
    )
}
export  default Fetchdata