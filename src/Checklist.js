import React from 'react'

function Checklist(props){
    return(
        <div>
            <p>{props.text}</p>
            <button>✅</button>
        </div>
    )
}

export default Checklist