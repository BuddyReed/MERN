import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Task from './components/Task';
import DisplayTask from './components/DisplayTask';
import { Container } from 'react-bootstrap'
import { useState } from 'react';

function App() {
  // State Variable - Are placed when you trying to past info to multiple components
  const [toDoList, setToDoList] = useState([]);


  const handleSubmit = (e, newTask) => {
    e.preventDefault();
    // lines below is creating a new object of the TASK. It is adding the checkbox which is 
    // reflected by the isComplete. Since this is where we create the new TASK isComplete will 
    // be FALSE. These line are only NEEDED because the of checkbox.
    const newToDo = {
      todo: newTask,
      isComplete: false
    }
    setToDoList([...toDoList, newToDo]);
  }

  const isComplete = (index) => {
    const updatedTodoList = toDoList.map((todo, i) => {
      if (index === i) {
        return {
          ...todo,
          isComplete: !todo.isComplete
        }
      }
      return todo
    })
    setToDoList(updatedTodoList);
  }

  const handleDelete = (index) => {
    const updatedTodoList = toDoList.filter((todo, i) => {
      return i !== index && toDoList
    })
    setToDoList(updatedTodoList);
  }

  return (
    <div className="App">
      <Container>
        <Task handleSubmit={handleSubmit} />
      </Container>
      <Container>
        <DisplayTask toDoList={toDoList} isComplete={isComplete} handleDelete={handleDelete} />
      </Container>
    </div>
  );
}

export default App;
