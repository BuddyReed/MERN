import React from 'react'

const DisplayTask = (props) => {
    const { toDoList, handleDelete, isComplete } = props;
    const { idx } = props;


    return (
        <div style={{
            margin: "0 auto",
        }}>
            {
                toDoList.isComplete && <p style={{
                    textDecoration: "line-through"
                }}>{toDoList}</p>
            }


            <div key={idx}>
                {toDoList.map((todo, idx) => {
                    return (
                        <div>
                            <p key={idx} value={todo.todo}> {todo.todo} </p>
                            < input type="checkbox" checked={todo.isComplete} placeholder='Task'
                                onChange={e => isComplete(idx)} />
                            <input onClick={(e) => { handleDelete(idx) }} className='btn btn-dark ms-3' type="submit" value='Delete' />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default DisplayTask