import React,{Component}  from 'react'

class Withclasseffet extends Component{
    constructor(){
        super();
        this.state={
            count:0,
            name:""
        }
    }
    componentDidMount(){
        document.title=`this is ${this.state.count} times`
    }
    //  componentDidUpdate(prevState,prevProps){
    //     if(prevState.count === this.state.count){
       
    //     }else{
    //         console.log("title changed")
    //         document.title=`this is ${this.state.count} times`
    //     }
    //  }\
    componentWillUnmount(){
        document.title="sam"
    }
    render(){
        return(
            <div>
            <input type="text" value={this.state.name} onChange={(e)=>this.setState({name:e.target.value})}></input>
            <button onClick={()=>{this.setState({count:this.state.count+1})}}>Clicked times:{this.state.count}</button>
            </div>
        )
    }
}
export default Withclasseffet