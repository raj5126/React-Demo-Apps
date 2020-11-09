import React from 'react'

function ChildComponent(props) {
    return (
        <div>

            {/*Pass parent method as props in child component*/}
            {/* <button onClick={props.greetHandler}>Greet Button</button> */}

            {/*Pass child param props in parent component*/} 
            <button onClick={()=>props.greetHandler('Child')}>Greet Button</button>
        </div>
    )
}

export default ChildComponent
