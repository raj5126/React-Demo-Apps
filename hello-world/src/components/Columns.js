import React from 'react'

function Columns() {

    const items = []

    return (
    <React.Fragment>
        {
            items.map( item => (
                <React.Fragment key={item.id}>
                </React.Fragment>
            ))
        }
    </React.Fragment>    
    )
}

export default Columns
