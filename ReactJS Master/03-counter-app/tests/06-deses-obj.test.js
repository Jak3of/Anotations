
import { usContext ,retornaArreglo } from '../src/06-deses-obj';

import { describe, test ,	expect  } from '@jest/globals';



describe('Pr_Test en 06-deses-obj',()=>{

    test('usContext debe de retornar un objeto', () => {
            
        const clave = 'Fernando' , nombre = 'Nelson' , edad = 28 ;

        const user = usContext({clave , nombre , edad});
            
        expect(user).toEqual({
            nombreClave: clave,
            petName : nombre,
            petRango : 'Capitan',
            anios : edad,
            latlng : {
                lat : 14.1232,
                lng : -12.3232
            }
        })

        expect(typeof user).toBe('object');
    });

    test('retornaArreglo debe de retornar un arreglo', () => {

        const [letters , numbers] = retornaArreglo();

        expect(letters).toBe('ABC');
        expect(numbers).toBe(123);
        
        expect(typeof letters).toBe('string');
        expect(typeof numbers).toBe('number');
    })


})
