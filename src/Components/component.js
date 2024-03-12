import React,{Component} from 'react'

class Counter extends Component{
    constructor(){
        super();
        this.state={
            count:0
        }
        this.increment=this.increment.bind(this)
    }

    increment(){
        this.setState({
            count:this.state.count+1
        })
    }
    render(){
        return(
            <button onClick={this.increment}>Click me count {this.state.count}</button>
        )
    }
}
export default Counter;