import { useReducer } from "react";
import { todoReducer } from "./todoReducer";
import { TodoList } from "./TodoList";
import { TodoAdd } from "./TodoAdd";


const initialState = [
    {
        id: new Date().getTime(),
        description: 'Recolectar la piedra del Alma',
        done: false
    }, {
        id: new Date().getTime() * 3,
        description: 'Recolectar la piedra del Poder',
        done: false
    }
]


export const TodoApp = () => {
    

    const [todos, dispatchTodo] = useReducer(todoReducer, initialState);

    const onNewTodo = ( description ) => {
        const newTodo = {
            id: new Date().getTime(),
            description,
            done: false
        }

        const action = {
            type: 'ADD_TODO',
            payload: newTodo
        }
        todoReducer(initialState, action);
    }

    return (
        <>
            <h1>Todo App ({todos.length}), <small>Pendientes: {todos.filter(todo => !todo.done).length}</small></h1>
            <hr />

            <div className="row">
                <div className="col-7">
                    <TodoList todos={todos} dispatchTodo={dispatchTodo}  />
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
