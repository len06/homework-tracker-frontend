import React from 'react'
import './Card.css'
import { useDropzone } from 'react-dropzone'
import Checklist from './Checklist'

function Card(props){
    return(
        <div className="card-box">
            <h2 className="card-title">{props.subject_title}</h2>
            <p className="starting-date">Starting Date: {props.starting_date}</p>
            <button className="card-button" onClick={props.handleClick}>+</button>
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