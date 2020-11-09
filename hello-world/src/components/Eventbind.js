import React, { Component } from 'react'

export class Eventbind extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            message:'Hi there!'    
        }

        this.ClickHandler = this.ClickHandler.bind(this)
    }
    
    ClickHandler(){
        this.setState({
            message: 'Good Bye !'
        })
        console.log(this)
    }

    // ClickHandler = () => {
    //     this.setState({
    //         message:'Goodbye'
    //     })
    // }

    render() {
        return (
            <div>
                <div>{this.state.message}</div>

                {/*1 st method for Eventbind*/}
                {/*<button onClick={this.ClickHandler.bind(this)}>Event Bind</button>*/}

                {/*2 nd method for Eventbind*/}
                {/*<button onClick={()=>this.ClickHandler()}>Event Bind</button>*/}

                {/*3 rd method for Eventbind*/}
                <button onClick={this.ClickHandler}>Event Bind</button>

                {/*4 th method using Clickhandler arrow function */}
                {/*<button onClick={this.ClickHandler}>Event Bind</button>*/}

            </div>
        )
    }
}

export default Eventbind
