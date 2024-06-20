import React from 'react'
import "./ChecklistModal.css"

    const ChecklistModal = ({onClose,addChecklist}) => {
    const [checklistData, setChecklistData] = React.useState({
        homework_name:'',
        deadline:'Daily'
    })

    const handleInputChange = (event) => {
        const {name, value} = event.target;
        setChecklistData((prevChecklistData) => ({
            ...prevChecklistData,
            [name]: value
        }))
    }
    
    const handleSubmit = (event) => {
        event.preventDefault();
        setChecklistData({
            homework_name:'',
            deadline:''
        })
        onClose();
        addChecklist(checklistData.homework_name, checklistData.deadline);
    }
    // console.log(checklistData);
    
    return(
        <div className="checklistmodal">
            <div className="checklistmodal-content">
                <form className="checklist-form" onSubmit={handleSubmit}>
                    <button className="close" type="button" onClick={onClose}>
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