


export const TodoItem = ({ todo = {}, deleteTodo,onToggleTodo }) => {
    return (
        <li 
            className="list-group-item d-flex justify-content-between align-items-center"
        >
            <span  
                className={`align-self-center cursor-pointer${todo.done ? ' text-decoration-line-through' : ''}`}
                onClick={
                    () => onToggleTodo(todo.id)
                }
                style={{
                    cursor: 'pointer'
                }}
                
            >
                {todo.description}
            </span>
            <button onClick={() => deleteTodo(todo.id)} className="btn btn-danger">Borrar</button>
        </li>
    )
}
