import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap'
import { useState } from 'react';


const Task = (props) => {
    const [newTask, setNewTask] = useState('')
    const { handleSubmit } = props;

    // This function is adding the newTask to the list, calling on the handleSubmit funtion
    // to handle the newTask. Then last cleaing the task the was inputted in the input. 
    const submitTask = (e) => {
        e.preventDefault();
        handleSubmit(e, newTask)
        setNewTask('')
    }

    return (
        <>
            <Container>
                <div>
                    <form onSubmit={(e) => submitTask(e, newTask)}>
                        <input type='text' placeholder='Task'
                            onChange={(e) => { setNewTask(e.target.value) }} value={newTask} />
                        <div>
                            <input className='btn btn-primary ms-3' type="submit" value='Add' />
                        </div>
                    </form>
                </div>
            </Container>
        </>
    )
}

export default Task;
