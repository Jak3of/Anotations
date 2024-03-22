
import { render , screen , fireEvent } from '@testing-library/react';

import { AddCategory } from '../../src/components';

describe('Pr_Test <AddCategory /> ', () => {

    test('Debe de cambiar el valor de la caja de texto', () => {
        render(<AddCategory onNewCategory={() => {}} />);

        // obtener el input
        const input = screen.getByRole('textbox');

        // simular el evento
        fireEvent.input(input , { target : { value : 'Saitama' }});

        // se ve el valor
        expect(input.value).toBe('Saitama');

    })


    test('Debe hacer el submit correctamente', () => {
        
        // anuncio una funcion para testear jest Mock
        const onNewCategory = jest.fn();

        // indicamos el input 
        const inputValue = 'Saitama';

        //renderizo
        render(<AddCategory onNewCategory={ onNewCategory } />);

        // llamo al input 
        const input = screen.getByRole('textbox');

        // llamo al form con aria-label="form"
        const form = screen.getByRole('form');

        // ingreso al input Saitama
        fireEvent.input(input , { target : { value : inputValue }});

        // lanzo un form
        fireEvent.submit(form);

        // el valor del input debe de ser vacio
        expect(input.value).toBe('');

        // la funcion es llamada desde el hijo una vez
        expect(onNewCategory).toHaveBeenCalledTimes(1);
        
        // debe de usar con el inputValue
        expect(onNewCategory).toHaveBeenCalledWith(inputValue);

        
        

    })


    test('no debe de llamar al onNewCategory si el input esta vacio', () => {
        // anuncio una funcion para testear jest Mock
        const onNewCategory = jest.fn();

        // indicamos el input 
        const inputValue = '';

        //renderizo
        render(<AddCategory onNewCategory={ onNewCategory } />);

        // llamo al input 
        const input = screen.getByRole('textbox');

        // llamo al form con aria-label="form"
        const form = screen.getByRole('form');

        // ingreso al input Saitama
        fireEvent.input(input , { target : { value : inputValue }});

        // lanzo un form
        fireEvent.submit(form);

        // el valor del input debe de ser vacio
        expect(input.value).toBe('');

        // la funcion no deberia ser llamada
        expect(onNewCategory).not.toHaveBeenCalled()
        
        
    })





})