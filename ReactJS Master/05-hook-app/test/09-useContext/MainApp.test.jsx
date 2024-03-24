

import { render , screen } from '@testing-library/react';
import { RouterProvider, createMemoryRouter } from "react-router-dom";

import { routes} from '../../src/Routes'


describe('Pr_Test en <MainApp/>', () => {

    
    test('debe de mostrar el HomePage', () => {
        
        const router = createMemoryRouter(routes,{initialEntries: ['/'],})
        

        render( 
            <RouterProvider router={router} />
        )



        expect(screen.getByText('HomePage')).toBeTruthy();


    })

    test('debe de mostrar el LoginPage', () => { 

        const router = createMemoryRouter(routes,{initialEntries: ['/login'],})
        

        render( 
            <RouterProvider router={router} />
        )


        expect(screen.getByText('LoginPage')).toBeTruthy();


     })



    test('debe mostrar active cuando este el alguna pagina', () => { 


        const router = createMemoryRouter(routes,{initialEntries: ['/'],})
        

        render( 
            <RouterProvider router={router} />
        )

        expect(screen.getByText('Home').className).toContain('active');



     })


})