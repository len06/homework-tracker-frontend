import React from "react";
import "./InputModal.css";

const InputModal = ({ show, onClose, addCard}) => {
    const [formData,setFormData] = React.useState({
        subject_title:"",
        starting_date:"",
        deadline_options:"daily",
      });
    
    if (!show) return null;
    
    const handleInputChange = (event) => {
        const {name,value} = event.target;
        setFormData((prevFormData) =>
            ({...prevFormData,
                [name]:value
            })
        );
    }

    function handleSubmit(event){
        event.preventDefault();
        setFormData({
            subject_title:'',
            starting_date:'',
            deadline_options:''
        })
        console.log(formData.subject_title);
        addCard(formData.subject_title,formData.starting_date,formData.deadline_options);
        onClose()
    };
    
    return (
        <div className="inputmodal">
        <div className="inputmodal-content">
            <form className="inputmodal-form" onSubmit={handleSubmit}>
            <button className="close" type="button" onClick={onClose}>
                &times;
            </button>

            <label htmlFor="subject_title">Subject Title:</label>
            <input id="subject_title" name="subject_title" type="text" value={formData.subject_title} onChange={handleInputChange}  required/>

            <label htmlFor="starting_date">Starting Date:</label>
            <input id="starting_date" name="starting_date"type="date"value={formData.starting_date} onChange={handleInputChange} required />

            <label htmlFor="deadline_options">Choose an option:</label>
            <select id="deadline_options" name="deadline_options" value={formData.deadline_options} onChange={handleInputChange} required>
                <option value="daily">Daily</option>
                <option value="weekly">Weekly</option>
                <option value="biweekly">Biweekly</option>
                <option value="monthly">Monthly</option>
            </select>

            <button className="submit" type="submit">
                Create
            </button>
            </form>

        </div>
        </div>
    );
};

export default InputModal;
