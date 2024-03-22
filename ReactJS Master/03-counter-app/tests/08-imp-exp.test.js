

import { getHeroesById , getHeroesByOwner } from '../src/08-imp-exp';

import { describe, test ,	expect  } from '@jest/globals';



describe('Pr_Test en 08-imp-exp',()=>{
    test('getHeroesById debe de retornar un objeto', () => {

        const id = 1;
        const hero = getHeroesById(id);

        expect(hero).toEqual({
            id: 1,
            name: 'Batman',
            owner: 'DC'
        })
    })

    test('getHeroesById debe de retornar undefined si no existe', () => {
        
        const id = 10;
        const hero = getHeroesById(id);

        expect(hero).toBeUndefined();
    })

    test('getHeroesByOwner debe de retornar un array con los heroes de DC', () => {

        const owner = 'DC';
        const heroes = getHeroesByOwner(owner);

        expect(typeof heroes).toBe('object');

        expect(heroes).toEqual( heroes.filter(hero => hero.owner === owner) )

        expect(heroes.length).toBe(3);

    })

    test('getHeroesByOwner debe de retornar un array con los heroes de Marvel', () => {

        const owner = 'Marvel';
        const heroes = getHeroesByOwner(owner);

        expect(typeof heroes).toBe('object');

        expect(heroes).toEqual( heroes.filter(hero => hero.owner === owner) )
        expect(heroes.length).toBe(2);
    })

})