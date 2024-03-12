import React,{Component} from 'react';
import axios from 'axios';

class Postform extends Component{
    constructor(){
        super();
        this.state={
            username:"",
            address:"",
            mobile:""
        }
        this.ChangeHand=this.ChangeHand.bind(this);
        this.ChangeHand2=this.ChangeHand2.bind(this);
        this.ChangeHand3=this.ChangeHand3.bind(this);
        this.submit=this.submit.bind(this)
    }
    submit(e){
        e.preventDefault()
        console.log(this.state)
         axios.post("https://jsonplaceholder.typicode.com/users",this.state)
         .then((res)=>{
             console.log(res.data)
         })
         .catch((error)=>{
             console.log(error)
         })
    }

     ChangeHand(e){
        this.setState({username:e.target.value})
       
    }
    ChangeHand2(e){
        this.setState({address:e.target.value})
       
    }
    ChangeHand3(e){
        this.setState({mobile:e.target.value})
       
    }
    render(){
        return(
            <div>
                <form onSubmit={this.submit} >
                    <div>
                     <input type="text" value={this.state.username} name='username' onChange={this.ChangeHand}></input>
                    </div>
                    <div>
                     <input type="text" value={this.state.address} name='address' onChange={this.ChangeHand2}></input>
                    </div>
                    <div>
                      <input type="text" value={this.state.mobile} name='mobile' onChange={this.ChangeHand3}></input>
                    </div>
                   <button type="submit" >click me</button> 
                  
                </form>
            </div>
        )
    }
}

export default Postform;