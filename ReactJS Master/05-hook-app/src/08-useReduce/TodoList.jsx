import { TodoItem } from "./TodoItem"



export const TodoList = ({ todos ,deleteTodo = () => {} }) => {
    return (
        <ul className="list-group ">
            {
                todos.map((todo, index) => (
                    <TodoItem key={index} todo={todo} deleteTodo={deleteTodo} />
                ))
            }

        </ul>
    )
}
