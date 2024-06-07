import React from 'react'
import './Card.css'
import { useDropzone } from 'react-dropzone'
import ChecklistModal from './modal/ChecklistModal'


function Card(props){
    const [showChecklistModal,setShowChecklistModal] = React.useState(false);
    
    return(
        <div className="card-box">
            <h2 className="card-title">{props.subject_title}</h2>
            <p className="starting-date">Starting Date: {props.starting_date}</p>
            <button className="card-button" onClick={() => setShowChecklistModal(true)}>+</button>
            {showChecklistModal ? <ChecklistModal onClose={() => setShowChecklistModal(false)} /> : undefined}
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