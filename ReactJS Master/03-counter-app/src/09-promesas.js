import { getHeroesById } from './08-imp-exp';

export const getHeroesByIdAsync = ( id ) => {

    return new Promise( ( resolve, reject ) => {

        setTimeout( () => {

            const hero = getHeroesById( id );
            if ( hero ) {
                resolve( hero );
            } else {
                reject( `No existe un héroe con el id ${ id }` );
            }
        }, 1000 );
    })
}