

import { render, screen , fireEvent } from '@testing-library/react';
import { TodoApp } from '../../src/08-useReduce/TodoApp';
import { useTodo } from '../../src/hooks';

jest.mock('../../src/hooks/useTodo');


describe('Pruebas en <TodoApp/>', () => { 

    useTodo.mockReturnValue({
        todos: [
            {
                id: 1,
                description: 'Piedra del alma',
                done: false
            },
            {
                id: 2,
                description: 'Piedra del poder',
                done: true
            }
        ],
        todosCount: 2,
        todosPendingCount: 1,
        onNewTodo: jest.fn(),
        onToggleTodo: jest.fn(),
        deleteTodo: jest.fn()
    })

    test('debe de mostrar el componente correctamente', () => { 

        render( <TodoApp /> );
        screen.debug();

        expect(screen.getByText('Piedra del alma')).toBeTruthy();
        expect(screen.getByText('Piedra del poder')).toBeTruthy();

     })

 })