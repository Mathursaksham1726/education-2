import React,{Component} from 'react';
import axios from 'axios';


class Getlist extends Component{
    constructor(){
        super();
        this.state={
            user:[],
            err:[]
        }
    }

    componentDidMount(){
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then((response)=>{
            console.log(response)
            console.log(response.data)
            this.setState({user:response.data})

        })
        .catch((error)=>{
            console.log(error)
            this.setState({err:error})
        })
    }
    render(){
       // const{user}=this.state
        return(
            <div>
                 User List
                {
                   this.state. user.length?
                    this.state.user.map(res=>{return(<div key={res.id}>{res.name}</div>)}):
                    null
                }
            </div>
        )
    }
}
export default Getlist;
