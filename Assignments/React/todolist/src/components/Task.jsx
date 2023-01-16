import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap'
import { useState } from 'react';


const Task = (props) => {
    const [newTask, setNewTask] = useState('')
    const { handleSubmit } = props;



    return (
        <>
            <Container>
                <div>
                    <form onSubmit={(e) => handleSubmit(e, newTask)}>
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
