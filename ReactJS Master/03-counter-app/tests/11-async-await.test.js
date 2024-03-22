import {getImagen} from '../src/11-async-await';

import { describe, test ,	expect  } from '@jest/globals';



describe('Pr_Test en 11-async-await',()=>{

    test('getImagen debe de retornar un url', async() => {
        
            const url = await getImagen();
            console.log(url);
            expect(typeof url).toBe('string');
        
    })
})
