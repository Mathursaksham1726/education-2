import React,{Component} from 'react'
import axios from 'axios'

class Printlist extends Component{
    constructor(){
        super();
        this.state={
            printlist:[]
        }
    }

    componentDidMount(){
        let r=axios.get('https://jsonplaceholder.typicode.com/posts')
        r.then((response)=>{
            this.setState={
                printlist:response.data
                
            }
            console.log(this.printlist)
           
        })
        r.catch((error)=>{
           console.log(error)
        })
    }
    render(){
        return(
           <div>hello</div>
           
        )
    }
}

export default Printlist;