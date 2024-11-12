import React from 'react'
import './Checklist.css'

interface ChecklistProp {
    homework_name : string,
    deadline: string 
}
function Checklist(prop:ChecklistProp){
    
    const [done,setDone] = React.useState<Boolean>(false);

    const name_style = {
        textDecoration: done ? "line-through" : "none"
    }
    
    return(
        <div className="checklist-content">
            <div className="main">
                <span className="homework-name" style={name_style}>{prop.homework_name}</span>
                <button className="tick-button" onClick={() => setDone((prevValue) => !prevValue)}>✅</button>
            </div>
            <span className="deadline">Deadline: {prop.deadline}</span>
        </div>
    )
}

export default Checklist