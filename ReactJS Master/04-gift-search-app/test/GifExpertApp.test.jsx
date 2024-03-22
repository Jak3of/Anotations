

import { render, screen , fireEvent } from '@testing-library/react';

import { GifExpertApp } from '../src/GifExpertApp';

describe('Pr_Test <GifExpertApp /> ', () => {
    
    test('Debe de renderizar correctamente', () => {
        
        render(<GifExpertApp />);
        
        expect(screen.getByText('GifExpertApp')).toBeTruthy();
        
    })

    test('Debe de mostrar una lista de categorias iniciales en 1', () => {

        render(<GifExpertApp />);

        expect(screen.getAllByRole('heading' , {level : 3}).length).toBe(1);
    })

    test('Debe de mostrar un form', () => {

        render(<GifExpertApp />);


        expect(screen.getByRole('form')).toBeTruthy();
        
    })

    test('Debe de agregar una nueva categoria ', () => {
        
        render(<GifExpertApp />);

        const input = screen.getByRole('textbox');

        const form = screen.getByRole('form');

        fireEvent.input(input , { target : { value : 'Saitama' }});

        fireEvent.submit(form);

        screen.debug();
        expect(screen.getAllByRole('heading' , {level : 3}).length).toBe(2);

    })


    test ('Al agregar una nueva categoria ya existente debe de mostrarse al principio', () => {
        
        render(<GifExpertApp />);

        const input = screen.getByRole('textbox');

        const form = screen.getByRole('form');

        fireEvent.input(input , { target : { value : 'Saitama' }});
        fireEvent.submit(form);

        fireEvent.input(input , { target : { value : 'One Punch Man' }});
        fireEvent.submit(form);

        fireEvent.input(input , { target : { value : 'Saitama' }});
        fireEvent.submit(form);


        screen.debug();

        console.log(screen.getAllByRole('heading' , {level : 3})[0].textContent );
        
        expect(screen.getAllByRole('heading' , {level : 3})[0].textContent).toBe('Saitama');



    })



})