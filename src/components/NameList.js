import React from 'react'

function NameList() {
    const names = ['Nirmit', 'Sanket', 'Meet', 'Nirmit']
    const listName = names.map((fname,index) => <h2 key={index}>{fname}</h2>)
    return (
        <div>
            {/* <h1>{names[0]}</h1>
            <h1>{names[1]}</h1>
            <h1>{names[2]}</h1> */}

            {listName}
        </div>
    )
}

export default NameList
