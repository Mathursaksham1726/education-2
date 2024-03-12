import { Component, useState } from "react"
 import React from 'react';
// // class Test extends Component{
// // constructor(){
// //    super();
// //    this.state={
// //     count:0,
// //     name:''
// //    }
// //this.incremnt=this.incremnt.bind(this)
// // }
// // incremnt(){
// //     console.log("ello")
// //     this.setState({
// //         count:this.state.count+1
// //     })
// //  incremnt=()=>{
// //     console.log("ello")
// //          this.setState({
// //              count:this.state.count+1
// //             })
// // }


// // render(){
// //     return(
// //         <button onClick={(e)=>{
// //             console.log("ello")

// //           this.setState({
// //               count:this.state.count+1,
// //               name:e.clientX
              
// //             })
// //             console.log(this.state.name)
// //         }}>Click me count:{this.state.count},name is{this.state.name}</button>
// //     )
// // }
// // }

// // function Test(){
// //     const[count,setcount]=useState(0)
// //     function incremnt(){
// //         setcount(count+2)
// //     }
// //     return(
// //         // <button onClick={()=>{console.log("buee")
// //         //     setcount(count+1)}}>clicked times {count}</button>
// //         <button onClick={incremnt}>clicked times {count}</button>
// //     )
// // }


  class Test extends Component{
  constructor(){
     super();
     this.state={
      count:0,
      name:''
     }
// //this.incremnt=this.incremnt.bind(this)
  }
// //  incremnt(){
// //      console.log("ello")
// //      this.setState(prevState =>{
       
// //     return  { count:prevState.count+1}
// //      }
     
     
//      //  this.state.name=e.clientX
     
         
// //     )
// // }
//   incremnt=()=>{
//      console.log("ello")
//           this.setState({
//              count:this.state.count+1
//              })
// }


 render(){
     return(
         <button onClick={(e)=>{
            this.setState(prevState=>({
                count:prevState.count+2,
                name:e.clientY
            }))
         }}>Click me count:{this.state.count},name is{this.state.name}</button>
     )
 }
  }

// function Test(){
//     const[count,setcount]=useState(0)
//     return(
//         <button onClick={()=>{setcount((prevCount)=>(prevCount+5))}}>Clied times{count}</button>
//     )
// }



export default Test;