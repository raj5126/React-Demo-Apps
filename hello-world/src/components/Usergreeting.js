import React, { Component } from 'react'

class Usergreeting extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             isLoggedin : true
        }
    }
    
    render() {        
        // 1 st method for rendering
        // if (this.state.isLoggedin){
        //     return(
        //         <div>Welcome Raj</div>
        //     )
        // }
        // else{
        //     return(
        //         <div>Welcome Guest</div>
        //     )
        // }

        // 2nd method for rendering
        // let msg
        // if(this.state.isLoggedin){
        //     msg = <div>Welcome Raj !</div>
        // }
        // else{
        //     msg = <div>Welcome Guest !</div>
        // }
        // return(
        //     <div>{msg}</div>
        // )

        // 3 rd method for rendering
        // return(
        //     this.state.isLoggedin ?
        //     <div>Welcome Raj !</div>:<div>Welcome Guest !</div>
        // )

        // 4 th method for rendering
        return this.state.isLoggedin && <div>Welcome Raj !</div>
    }
}

export default Usergreeting
