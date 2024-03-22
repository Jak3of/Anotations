import {getHeroesByIdAsync} from '../src/09-promesas';

import { describe, test ,	expect  } from '@jest/globals';


describe('Pr_Test en 09-promesas',()=>{

    test('getHeroesByIdAsync debe de retornar un objeto', (done) => {

        const id = 1;
        
        getHeroesByIdAsync(id).then(hero => {
            
            expect(hero).toEqual({
                id: 1,
                name: 'Batman',
                owner: 'DC'
            })

            done();
        })


    })


    test('getHeroesByIdAsync debe de retornar un error si el heroe no existe', (done) => {

        const id = 10000;
        
        getHeroesByIdAsync(id)
        .catch(error => {

            expect(error).toBe(`No existe un héroe con el id ${ id }`)
            done();
        })


    })


})