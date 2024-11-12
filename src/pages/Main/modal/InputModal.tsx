import React from "react";
import "./InputModal.css";
import axios from 'axios';

interface InputModalProps{
    onClose: () => void
    addCard: (subject_title:string,starting_date:string,deadline:string) => void
}


function InputModal(props:InputModalProps){
    
    const [formData,setFormData] = React.useState({
        subject_title:"",
        starting_date: new Date().toISOString().slice(0, 10),
        deadline_options:"daily",
    });
    
    
    const handleInputChange = (event:React.ChangeEvent<HTMLElement>) => {
        const {name,value} = event.target as HTMLSelectElement | HTMLInputElement;
        setFormData((prevFormData) =>
            ({...prevFormData,
                [name]:value
            })
        );
    }

    function handleSubmit(event: React.FormEvent<HTMLFormElement>){
        event.preventDefault();

        axios.post('/api/board', {
            name: formData.subject_title
        }).then((res) => {
            const data = res.data;
            props.addCard(data.Name, formData.starting_date, formData.deadline_options);
            console.log(formData)
        }).catch((err) => {
            console.error(err);
        })


        setFormData({
            subject_title:'',
            starting_date: new Date().toISOString().slice(0, 10),
            deadline_options:''
        })
        props.onClose()
    };
    
    return (
        <div className="inputmodal">
            <div className="inputmodal-content">
                <form className="inputmodal-form" onSubmit={handleSubmit}>
                <button className="close" type="button" onClick={props.onClose}>
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
