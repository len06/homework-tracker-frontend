import React from 'react'
import './Card.css'
import { useDropzone } from 'react-dropzone'
import Checklist from './Checklist'
import ChecklistModal from './modal/ChecklistModal'

interface CardProp {
    subject_title: string
    starting_date: string
    deadline: string
    removeCard: () => void
}

interface ChecklistItems {
    id: number
    homework_name:string
    deadline:string
}


function Card(props:CardProp){
    const [showChecklistModal,setShowChecklistModal] = React.useState<Boolean>(false);
    const [checklistItems,setChecklistItems] = React.useState<ChecklistItems[]>([]);
    
    function addChecklistItem(homework_name:string,deadline:string){
        setChecklistItems((prevItems) => {
            return [...prevItems,{
                id:prevItems.length + 1,
                homework_name:homework_name,
                deadline: deadline
            }]
        })
    }
    
    return(
        <div className="card-box">
            <button className="close" type="button" onClick={props.removeCard}>
                &times;
            </button>
            <h2 className="card-title">{props.subject_title}</h2>
            <p className="starting-date">Starting Date: {props.starting_date}</p>
            
            <div className="checklist-container">
                <h2>Checklist: </h2>
                {checklistItems.map((item) => (
                    <Checklist 
                        key={item.id} 
                        homework_name={item.homework_name}
                        deadline={item.deadline}
                    />
                ))
                }
                <button className="card-button" onClick={() => setShowChecklistModal(true)}>+</button>
            </div>
            {showChecklistModal ? <ChecklistModal onClose={() => setShowChecklistModal(false)} addChecklist={addChecklistItem}/> : undefined}
            <DropZone />
        </div>
    )
}


function DropZone(){
    const {getRootProps, getInputProps, isDragActive} = useDropzone()

    return(
        <div className="card-dropzone" {...getRootProps()}>
            <input {...getInputProps()} />
            {
                isDragActive?
                <p>Drop the files here...</p>:
                <p>Drag and drop the files you want here</p>
            }
        </div>
    )
}

export default Card