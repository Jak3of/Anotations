import { render , screen , fireEvent } from '@testing-library/react';

import { CounterApp } from '../src/CounterApp';

import { describe, test , expect } from '@jest/globals';


describe('Pr_Test en <CounterApp/>',() => {

    const initialValue = 100;

    test('debe de hacer match con el snapshot',() =>{

        const {container} = render(<CounterApp value={ initialValue}/>);


        expect(container).toMatchSnapshot();

    })

    test('debe de mostrar el valor por defecto de 100',() =>{
        render(<CounterApp value={ 100 }/>);
        expect(screen.getByText(100)).toBeTruthy();

        // expect(screen.getByRole('heading',{level: 3}).innerHTML).toBe('100')




    })


    test('debe de incrementar con el boton +1',() =>{

        render(<CounterApp value={ initialValue }/>);
        fireEvent.click(screen.getByText('+1'));
        expect(screen.getByText('101')).toBeTruthy();
    })

    test('debe de decrementar con el boton -1',() =>{

        render(<CounterApp value={ initialValue }/>);
        fireEvent.click(screen.getByText('-1'));
        expect(screen.getByText('99')).toBeTruthy();
    })

    test('debe de hacer reset con el boton Reset',() =>{

        render(<CounterApp value={ initialValue }/>);
        fireEvent.click(screen.getByText('+1'));
        fireEvent.click(screen.getByText('+1'));
        fireEvent.click(screen.getByRole('button',{name:'btn-reset'}));
        expect(screen.getByText(100)).toBeTruthy();
    })




})
