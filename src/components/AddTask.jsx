import React, { useState } from 'react';
import './AddTask.css';
import Fodase from './Button';

const AddTask = ({handleTaskAddition}) => {
    const [inputData, setInputData] = useState('')

    const handleInputChange = (e) => {
        setInputData(e.target.value);
    };

    const handleAddTaskClick = () => {
        handleTaskAddition(inputData)
        setInputData("");
    }

    return (  
        <div className="add-task-container">
            <input onChange={handleInputChange} value={inputData} className="add-task-input" type="text" />
            <div className="add-task-button-container">
                <Fodase onClick={handleAddTaskClick}>Adicionar</Fodase>
            </div>
        </div>

    );
}
 
export default AddTask;