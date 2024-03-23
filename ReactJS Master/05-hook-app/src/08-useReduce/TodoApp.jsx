
import { TodoList } from "./TodoList";
import { TodoAdd } from "./TodoAdd";

import { useTodo } from "../hooks";




export const TodoApp = () => {
    

    const {todos, todosCount, todosPendingCount, onNewTodo, deleteTodo, onToggleTodo} = useTodo();

    return (
        <>
            <h1>Todo App ({todosCount}), <small>Pendientes: {todosPendingCount}</small></h1>
            <hr />

            <div className="row">
                <div className="col-7">
                    <TodoList todos={todos} deleteTodo={deleteTodo} onToggleTodo={onToggleTodo}  />
                </div>
                <div className="col-5">
                    <h4>Agregar TODO</h4>
                    <hr />
                    <TodoAdd onNewTodo={onNewTodo} />
                </div>
            </div>

        </>
    )
}
