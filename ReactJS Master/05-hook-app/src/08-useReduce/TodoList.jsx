import { TodoItem } from "./TodoItem"



export const TodoList = ({ todos ,deleteTodo = () => {} ,onToggleTodo = () => {} }) => {
    return (
        <ul className="list-group ">
            {
                todos.map((todo, index) => (
                    <TodoItem 
                        key={todo.id} 
                        todo={todo} 
                        deleteTodo={deleteTodo} 
                        onToggleTodo={onToggleTodo}
                    />
                ))
            }

        </ul>
    )
}
