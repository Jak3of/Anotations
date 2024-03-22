

import { renderHook , waitFor } from '@testing-library/react';
import { useFetchGifs } from '../../src/hooks/useFetchGifs';



describe('Pruebas en el hook useFetchGifs ', () => {
    
    const category = 'One Punch';

    test('Debe de regresar el estado inicial', () => {
        // renderHook(() => useFetchGifs(category));

        const { result } = renderHook(() => useFetchGifs(category));

        const { gifs , isLoading } = result.current;

        expect(gifs.length).toBe(0);
        expect(isLoading).toBeTruthy();

    })

    test('Debe de retornar un arreglo de gifs', async() => {
        
        const { result  } = renderHook(() => useFetchGifs(category));

        await waitFor(
            () => expect(result.current.gifs.length).toBeGreaterThan(0)
        );

        const { gifs , isLoading } = result.current;

        expect(gifs.length).toBeGreaterThan(0);
        expect(isLoading).toBeFalsy();

    })

})