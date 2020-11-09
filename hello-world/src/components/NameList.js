import React from 'react'
import Person from './Person'
function NameList() {

    const persons = [
        {
            id : 1,
            name : 'Raj',
            age : 21,
            skill : 'React'
        },
        {
            id : 2,
            name : 'Rocky',
            age : 21,
            skill : 'Django'
        },
        {
            id : 3,
            name : 'RV',
            age : 20,
            skill : 'Stockmarket Analyze'
        }
    ]
    const names = ['Raj','Rocky','RV','Raj']
    // const personlist = persons.map(p => <Person key={p.id} person={p}/>)
    const nameList = names.map((name,index) => <h4 key={index}>{index} {name}</h4>)
    return  <div>{nameList}</div>
}

export default NameList
