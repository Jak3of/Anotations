
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import {TodoItem} from '../../src/08-useReduce/TodoItem';




describe('TodoItem', () => {

    const todo = {
        id: 1,
        description: 'Learn React',
        done: false,
    };

    const deleteTodo = jest.fn();

    const onToggleTodo = jest.fn();

    test('renders the todo item', () => {
        

        render(<TodoItem todo={todo} deleteTodo={deleteTodo} onToggleTodo={onToggleTodo} />);
        
        expect(screen.getByText('Learn React')).toBeTruthy();
    });
    
    
    
    test('debe mostrar el Todo pendiente de completar', () => {
        
        todo.done = true;
        
        render(<TodoItem todo={todo} onToggleTodo={onToggleTodo} deleteTodo={deleteTodo} />);

        expect(screen.getByText('Learn React')).toBeTruthy();
        const spanElement =  screen.getByText('Learn React');
        expect( spanElement.className ).toContain('text-decoration-line-through');

    });

    test('span debe de llamar el ToggleTodo cuando se hace click', () => { 
        render(<TodoItem todo={todo} onToggleTodo={onToggleTodo} deleteTodo={deleteTodo} />);

        const spanElement =  screen.getByText('Learn React');

        fireEvent.click(spanElement);

        expect( onToggleTodo ).toHaveBeenCalledWith(todo.id);



     })

     test('el button debe de lamar el deleteTodo ', () => { 
        render(<TodoItem todo={todo} onToggleTodo={onToggleTodo} deleteTodo={deleteTodo} />);

        screen.debug();

        const buttonDelete = screen.getByText('Borrar');

        fireEvent.click(buttonDelete);

        expect(deleteTodo).toHaveBeenCalledWith(todo.id);
        
      })


});
