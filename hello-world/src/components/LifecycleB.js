import React, { Component } from 'react'

class LifecycleB extends Component {
    
    // Mounting
    constructor(props) {
        super(props)
    
        this.state = {
             name : 'Raj'
        }
        console.log('LifecycleB constructor')
    }
    
    // Mounting and Updating
    static getDerivedStateFromProps(props, state){
        console.log('LifecycleB getDerivedStateFromProps')
        return null
    }

    // Mounting
    componentDidMount(){
        console.log('LifecycleB componentDidMount')
    }

    // Updating
    shouldComponentUpdate(){
        console.log('LifecycleB shouldComponentUpdate')
        return true
    }

    // Updating
    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log('LifecycleB getSnapshotBeforeUpdate')
        return null
    }

    // Updating
    componentDidUpdate(){
        console.log('LifecycleB componentUpdate')
    } 

    // Mounting and Updating
    render() {
        console.log('LidecycleB render')
        return (
            <div>
              Lifecycle B  
            </div>
        )
    }
}

export default LifecycleB
