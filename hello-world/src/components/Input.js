import React, { Component } from 'react'

class Input extends Component {

    constructor(props) {
        super(props)
        this.inpputRef = React.createRef()
        
    }
   
    focusInput(){
        this.inpputRef.current.focus()
    }

    render() {
        return (
            <div>
               <input type='text' ref={this.inpputRef}/> 
            </div>
        )
    }
}

export default Input
