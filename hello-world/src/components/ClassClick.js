import React, { Component } from 'react'

export class ClassClick extends Component {
    
    ClickHandler(){
        console.log('Clicked')
    }

    render() {
        return (
            <div>
               <button onClick={this.ClickHandler}>Click (Event Handling in Class Component)</button> 
            </div>
        )
    }
}

export default ClassClick
