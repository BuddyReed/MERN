import React from 'react'

const DisplayTask = (props) => {
    const { toDoList, handleDelete, isDone } = props;
    const { idx } = props;


    return (
        <div style={{
            margin: "0 auto",
        }}>


            <div key={idx}>
                {toDoList.map((todo, idx) => {
                    return (
                        <div key={idx} >
                            {
                                todo.isComplete ? <p className='complete'> {todo.todo} </p> : <p> {todo.todo}</p>
                            }
                            {/* <p key={idx} value={todo.todo}> {todo.todo} </p> */}
                            < input type="checkbox" checked={todo.isComplete} placeholder='Task'
                                onChange={e => isDone(idx)} />
                            <input onClick={(e) => { handleDelete(idx) }} className='btn btn-dark ms-3' type="submit" value='Delete' />
                        </div>
                    )
                })}
            </div>
        </div >
    )
}

export default DisplayTask