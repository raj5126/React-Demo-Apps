import React, { Component } from 'react'
import ChildComponent from './ChildComponent'

class ParentComponent extends Component {
   
    constructor(props) {
        super(props)
    
        this.state = {
             parentName : 'Parent'
        }

        this.greetParent = this.greetParent.bind(this)
    }

    //Pass parent method as props in child component
    // greetParent(){
    //     alert(`Hello ${this.state.parentName}`)
    // }

    //Pass child param props in parent component
    greetParent(childName){
        alert(`Hello ${this.state.parentName} from ${childName}`)
    }
    
    render() {
        return (
            <div>
                <ChildComponent greetHandler={this.greetParent}/>
            </div>
        )
  }
}

export default ParentComponent
