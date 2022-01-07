import React, { useEffect, useState } from "react";
import {v4 as uuidv4 } from 'uuid';
import axios  from "axios";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import './App.css';

import TaskDetails from "./components/TaskDetails";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";



const App = () => {
  // let message = 'Hello World!'
  const [tasks, setTasks] = useState([
    
  ]);

  useEffect(() => {
    const fetchTasks = async () => {
      const {data} = await axios.get(
        "https://jsonplaceholder.cypress.io/todos?_limit=10"
      );
      setTasks(data);
    };
    fetchTasks();
  }, []);

  const handleTaskClick = (taskId) => {
    const newTasks = tasks.map(task =>{
      if (task.id === taskId) return { ...task, completed: !task.completed }

      return task;
    });

    setTasks(newTasks);
  }

  const handleTaskAddition = (taskTitle) => {
      const newTask = [...tasks, {
        title: taskTitle,
        id: uuidv4(),
        completed: false,
      },
    ];
    setTasks(newTask);
  }

  const handleTaskDeletion = (taskId) => {
      const newTasks = tasks.filter(task => task.id !== taskId);
      setTasks(newTasks);
  }

  
function Home(){
  return (
    <>
      <AddTask handleTaskAddition={handleTaskAddition}/>
      <Tasks tasks={tasks}  
        handleTaskClick={handleTaskClick} 
        handleTaskDeletion={handleTaskDeletion}
      />
    </>
  )
}

  return (
      <Router>
        <div className="container"> 
          <Header/>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path=":taskTitle" element={<TaskDetails />} />
          </Routes>
        </div>
      </Router>
  );
};


export default App;