

import { render , screen , fireEvent} from '@testing-library/react';
import { LoginPage } from '../../src/09-useContext/LoginPage';

import  { UserContext } from '../../src/09-useContext/context/UserContext';




describe('Pr_Test en <LoginPage/>', () => {
    
    const user = {
        id: 123,
        name: 'Daniel',
        email: 'daniel@.com'
    }


    test('debe de mostrar el componente sin el usuario', () => {
        render(
            <UserContext.Provider value={{ user: null }}>
                <LoginPage />
            </UserContext.Provider>
        );

        const pTag = screen.getByLabelText('bienvenida');

        expect( pTag.innerHTML ).toBe('Bienvenido ');


    })

    test('debe de llamar al Set user al hacer click', () => { 

        const setUserMock = jest.fn();

        render(
            <UserContext.Provider value={{ user : null , setUser: setUserMock }}>
                <LoginPage />
            </UserContext.Provider>
        );

        const buttonSetUser = screen.getByText('Set user');

        fireEvent.click(buttonSetUser);

        expect(setUserMock).toHaveBeenCalledWith(user);
        

     })

     test('debe de mostrar el componente con el usuario', () => {

        render(
            <UserContext.Provider value={{ user }}>
                <LoginPage />
            </UserContext.Provider>
        );

        const pTag = screen.getByLabelText('bienvenida');

        expect( pTag.innerHTML ).toBe(`Bienvenido ${user.name}`);

     })


})