import React, { Component } from 'react'

class Eventhandle extends Component{
    constructor(){
        super();
        this.state={
            count:0
        }
        this.increase=this.increase.bind(this)
    }

    //   increment(e){
    //     console.log(e.clientX)
    //       console.log("increwas")
    //   }
    increase(){
        this.setState({
            count:this.state.count +1
        })
    }
    render(){
        return(
            <div>
                {/* <button onClick={this.increment}>Click me</button> */}
                {/* <button onClick={(e)=>{console.log(e.clientX);
      console.log("increwas")}}>Click me</button> */}
      {/* <button onClick={(e)=>{this.increment(e)}}>Click me</button> */}
      {/* <button onClick={this.increase}>count{this.state.count}</button> */}
      <button onClick={(prevState)=>{
        this.setState(()=>{
           this.state.count=prevState.count+1
           // console.log(e.clientX)
      })
      }}> Click me{this.state.count}</button>
            </div>
        )
    }
}
export default Eventhandle