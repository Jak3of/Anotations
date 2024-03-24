
import { render, screen, fireEvent } from '@testing-library/react';
import { UserContext } from '../../src/09-useContext/context/UserContext';
import { HomePage } from '../../src/09-useContext/HomePage';

describe('Pr_Test en <HomePage/>', () => {

    test('debe de mostrar el componente sin el usuario', () => {
        
        render(
            <UserContext.Provider value={{ user: null }}>
                <HomePage />
            </UserContext.Provider>
        );
        
        const preTag = screen.getByLabelText('pre');

        expect( preTag.innerHTML ).toBe('null');


        
    })

    test('debe de mostrar el componente con el usuario', () => {

        const user = {
            id: 1,
            name: 'Juan'
        }

        render(
            <UserContext.Provider value={{ user }}>
                <HomePage />
            </UserContext.Provider>
        )

        screen.debug();
        const preTag = screen.getByLabelText('pre');

        expect( preTag.innerHTML ).toBe(JSON.stringify(user, null, 3));

        

    })



})