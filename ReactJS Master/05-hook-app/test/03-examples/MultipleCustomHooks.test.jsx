
import { render, screen , fireEvent , renderHook, act } from '@testing-library/react';
import { MultipleCustomHooks } from '../../src/03-examples/MultipleCustomHooks';
import { useCounter, useFetch } from '../../src/hooks';

jest.mock('../../src/hooks/useFetch');
jest.mock('../../src/hooks/useCounter');


describe('Pruebas en <MultipleCustomHooks/>', () => { 

    const mockIncrement = jest.fn();
        
    useCounter.mockReturnValue({ 
        counter: 1, 
        increment: mockIncrement
    })

    beforeEach( () => jest.clearAllMocks() )

    test('debe de mostrar el componente por defecto', () => {

        useFetch.mockReturnValue({ data: null, isLoading: true, hasError: null});

        render( <MultipleCustomHooks /> );
        expect( screen.getByText('Loading...') ).toBeTruthy();
        expect( screen.getByText('Informacion de pokemon')).toBeTruthy();
        const nextButton = screen.getByRole('button', {name: 'Next'});

        expect( nextButton.disabled ).toBeTruthy();

    })

    test('debe de mostrar un pokemon con un Mock', () => {

        useFetch.mockReturnValue({ 
            data: 
            {
                name: 'bulbasaur',
                sprites:{
                    back_default : 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png',
                    front_default : 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
                    back_shiny :'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/1.png',
                    front_shiny : 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/1.png'
                }
            }, 
            isLoading: false,
            hasError: null});

        render( <MultipleCustomHooks /> );
        
        expect( screen.getByText('#1 - bulbasaur') ).toBeTruthy();
        const nextButton = screen.getByRole('button', {name: 'Next'});
        expect( nextButton.disabled ).toBeFalsy();

        
    })

    test('debe de llamar la funcion de incrementar', () => {

        
        useFetch.mockReturnValue({ 
            data: 
            {
                name: 'bulbasaur',
                sprites:{
                    back_default : 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png',
                    front_default : 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
                    back_shiny :'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/1.png',
                    front_shiny : 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/1.png'
                }
            }, 
            isLoading: false,
            hasError: null
        });
        
            
        render( <MultipleCustomHooks /> );
        const nextButton = screen.getByRole('button', {name: 'Next'}); 

        fireEvent.click( nextButton );

        expect(mockIncrement ).toHaveBeenCalled();
        
    })


    

    
 })
