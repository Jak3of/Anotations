
import { todoReducer } from '../../src/08-useReduce/todoReducer';



describe('Pruebas en todoReducer', () => {

    const initialState = [{
        id: 1,
        todo : 'Recolectar la priedra del Alma',
        done : false,
    }]


    test('debe de regresar el estado inicial', () => { 

        const state = todoReducer( initialState, {});
        expect(state).toBe( initialState );

     })

     test('debe de agregar un TODO', () => {

        const action = {
            type: 'ADD_TODO',
            payload: {
                id: 2,
                todo: 'Recolectar la piedra del poder',
                done: false
            }
        }

        const state = todoReducer( initialState, action );

        expect(state).toContain(action.payload);

     })

     test('debe de borrar un TODO', () => {

        const action = {
            type: 'DELETE_TODO',
            payload: 1
        }

        const state = todoReducer( initialState, action );

        expect(state.length).toBe(0);


     })

     test('debe de hacer el toggle del TODO', () => {

        const action = {
            type: 'TOGGLE_TODO',
            payload: 1
        }

        const state = todoReducer( initialState, action );
        expect(state[0].done).toBe(true);

        const newState = todoReducer( state, action );
        expect(newState[0].done).toBe(false);


     })

     



 })