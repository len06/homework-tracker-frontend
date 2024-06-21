import React from 'react'
import './Checklist.css'

function Checklist(props){
    
    const [done,setDone] = React.useState(false);

    const name_style = {
        textDecoration: done ? "line-through" : "none"
    }
    
    return(
        <div className="checklist-content">
            <div className="main">
                <span className="homework-name" style={name_style}>{props.homework_name}</span>
                <button className="tick-button" onClick={() => setDone((prevValue) => !prevValue)}>✅</button>
            </div>
            <span className="deadline">Deadline: {props.deadline}</span>
        </div>
    )
}

export default Checklist