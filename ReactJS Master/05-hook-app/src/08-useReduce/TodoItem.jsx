


export const TodoItem = ({ todo = {}, deleteTodo }) => {
    return (
        <li 
            className="list-group-item d-flex justify-content-between align-items-center"
        >
            <span>{todo.description}</span>
            <button onClick={deleteTodo} className="btn btn-danger">Borrar</button>
        </li>
    )
}
