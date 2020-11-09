import React, { Component } from 'react'
import LifecycleB from  './LifecycleB';

class LifecycleA extends Component {
  
    // Mounting
    constructor(props) {
        super(props)
    
        this.state = {
             name : 'Raj'
        }
        console.log('LifecycleA constructor')
    }
    
    // Mouting and Updating
    static getDerivedStateFromProps(props, state){
        console.log('LifecycleA getDerivedStateFromProps')
        return null
    }

    // Mouting
    componentDidMount(){
        console.log('LifecycleA componentDidMount')
    }

    // Updating
    shouldComponentUpdate(){
        console.log('LifecycleA shouldComponentUpdate')
        return true
    }

    // Updating
    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log('LifecycleA getSnapshotBeforeUpdate')
        return null
    }

    // Updating
    componentDidUpdate(){
        console.log('LifecycleA componentUpdate')
    } 

    changeState = () => {
        this.setState({
            name : 'RP'
        })
    }

    // Mounting and Updating
    render() {
        console.log('Lidecycle A render')
        return (
            <div>
              <div>Lifecycle A</div>
              <button onClick = {this.changeState}>ChangeState</button>
              <LifecycleB/>
            </div>
        )
    }
}

export default LifecycleA
 