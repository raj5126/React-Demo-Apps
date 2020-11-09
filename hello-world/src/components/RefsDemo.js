import React, { Component } from 'react'

class RefsDemo extends Component {

    constructor(props) {
        super(props)
        this.inputRef = React.createRef()
        this.cbRef = null
        this.setCbRef = (element) => {
            this.cbRef = element
        }
    }

    componentDidMount(){

        // 1 st method for focus using ref
        // this.inputRef.current.focus()
        // console.log(this.inputRef)

        // 2 nd method for focus using ref
        if(this.cbRef){
            this.cbRef.focus()
        }
    }

    clickHandler = () =>{
        alert(this.inputRef.current.value)
    }

    render() {
        return (
            <div>
                <input type='text' ref = {this.inputRef}/>
                <input type='text' ref = {this.setCbRef}/>
                <button onClick={this.clickHandler}>Click</button>                
            </div>
        )
    }
}

export default RefsDemo
