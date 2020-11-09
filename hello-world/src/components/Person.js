import React from 'react'

function Person({person}) {
    return (
        <div>
            <h5>I am {person.name}. I am {person.age} years old. I know {person.skill} </h5>
        </div>
    )
}

export default Person
