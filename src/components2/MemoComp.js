import React from 'react'

function MemoComp({name}) {
    console.log('Memo Component');
    console.log(`${name}`);
    return (
        <div>
            {name}
        </div>
    )
}

export default React.memo(MemoComp)
