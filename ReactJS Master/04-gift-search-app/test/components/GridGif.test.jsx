
import { render , screen , fireEvent } from '@testing-library/react';

import { GridGif } from '../../src/components';

import { useFetchGifs } from '../../src/hooks/useFetchGifs';


jest.mock('../../src/hooks/useFetchGifs');

describe('Pr_Test <GridGif /> ', () => {

    const category = 'Saitama';

    test('Debe de mostrar el loading inicialmente', () => {


        // se simula el return de useFetchGifs
        useFetchGifs.mockReturnValue({
            gifs : [],
            isLoading : true
        })
        
        render(<GridGif category={category} />);

        const loading = screen.getByText('Cargando...');

        expect(loading).toBeTruthy();


    })

    test('Debe de mostrar items cuando se cargan las imágenes desde useFetchGifs', () => {
        
        const gifsd = [
            {
                id : 'ABC',
                title : 'Saitama',
                url : 'https://one-punch.com/saitama.jpg'
            },{
                id : '123',
                title : 'Goku',
                url : 'https://one-punch.com/Goku.jpg'
            },
        ]


        useFetchGifs.mockReturnValue({
            gifs : gifsd,
            isLoading : false
        })

        render(<GridGif category={category} />);

        expect(screen.getAllByRole('img').length).toBe(gifsd.length);


    })

    test('Debe de mostrar el titulo en el componente', () => {
        
        useFetchGifs.mockReturnValue({
            gifs : [],
            isLoading : false
        })

        render(<GridGif category={category} />);

        expect(screen.getByText(category)).toBeTruthy();

    })


})