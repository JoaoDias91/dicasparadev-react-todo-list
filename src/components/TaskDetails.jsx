import React from 'react';
import { useParams } from 'react-router-dom';

import './TaskDetails.css';

import Button from './Button';


const TaskDetails = () => {
    const params = useParams();
    //console.log(params);
    return (
        <>
            <div className='back-button-container'>
                <Button>Voltar</Button>
            </div>
            <div className="task-details-container">
                <h2>{params.taskTitle}</h2>
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                    Quibusdam praesentium porro nostrum atque quas iure vel placeat, 
                    qui ipsam velit optio ut iste ipsum quia, 
                    illum aspernatur, sunt nam consequuntur!
                </p>
            </div>
        </> 
     );
}
 
export default TaskDetails;