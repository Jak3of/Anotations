import { useEffect, useReducer } from "react";
import { todoReducer } from "../08-useReduce/todoReducer";



const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || [];
}


export const useTodo = ( initialState = []) => {

    const [todos, dispatchTodo] = useReducer(todoReducer, initialState ,init);


    useEffect(
        () =>{
            localStorage.setItem('todos', JSON.stringify(todos))
        },[todos]
    )

    const onNewTodo = ( newTodo ) => {
        

        const action = {
            type: 'ADD_TODO',
            payload: newTodo
        }   
        dispatchTodo(action);
    }

    const deleteTodo = (id) => {
        const action = {
            type: 'DELETE_TODO',
            payload: id
        }
        dispatchTodo(action);
        
    }
    
    const onToggleTodo = (id) => {
        const action = {
            type: 'TOGGLE_TODO',
            payload: id
        }
        dispatchTodo(action);
    }




    return {
        todos,
        onNewTodo,
        deleteTodo,
        onToggleTodo,
        todosCount : todos.length ,
        todosPendingCount : todos.filter(todo => !todo.done).length
    }
}