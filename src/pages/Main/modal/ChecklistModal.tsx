import React from 'react'
import "./ChecklistModal.css"

type ChecklistModalProp = {
    onClose: () => void
    addChecklist: (homework_name:string,deadline:string) => void
}

    function ChecklistModal(props:ChecklistModalProp){
    const [checklistData, setChecklistData] = React.useState({
        homework_name:'',
        deadline:'Daily'
    })

    const handleInputChange = (event:React.ChangeEvent<HTMLElement>) => {
        const {name, value} = event.target as HTMLInputElement | HTMLSelectElement;
        setChecklistData((prevChecklistData) => ({
            ...prevChecklistData,
            [name]: value
        }))
    }
    
    const handleSubmit = (event:React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setChecklistData({
            homework_name:'',
            deadline:''
        })
        props.onClose();
        props.addChecklist(checklistData.homework_name, checklistData.deadline);
    }
    // console.log(checklistData);
    
    return(
        <div className="checklistmodal">
            <div className="checklistmodal-content">
                <form className="checklist-form" onSubmit={handleSubmit}>
                    <button className="close" type="button" onClick={props.onClose}>
                    &times;
                    </button>
                    
                    <label htmlFor='homework_name'>Homework Name:</label>
                    <input type='text' name='homework_name' value={checklistData.homework_name} onChange={handleInputChange} required/>
                    
                    <label htmlFor="deadline_options">Choose an option:</label>
                    <select id="deadline_options" name="deadline" value={checklistData.deadline} onChange={handleInputChange} required>
                        <option value="daily">Daily</option>
                        <option value="weekly">Weekly</option>
                        <option value="biweekly">Biweekly</option>
                        <option value="monthly">Monthly</option>
                    </select>

                    <button className="submit" type="submit">Create</button>
                </form> 
            </div>
        </div>
    )
    
}

export default ChecklistModal