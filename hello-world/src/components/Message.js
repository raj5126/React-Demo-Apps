import React,{Component} from 'react';

class Message extends Component{

    constructor(){
        super()
        this.state={
            message:'Welcome Visitor'
        }
    }

    ChangeMessage(){
        this.setState({
            message:'Thank you for click me '
        })
    }

    render(){
        return (
                <div>
                     <h2>{this.state.message}</h2>
                     <button onClick={()=>this.ChangeMessage()}>Click me !</button>
                </div>
            )
    }
}
export default Message