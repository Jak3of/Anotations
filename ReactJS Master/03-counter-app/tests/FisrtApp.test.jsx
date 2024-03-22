import { describe, test , expect } from '@jest/globals';

import { render } from '@testing-library/react';
import FirstApp  from '../src/FisrtApp';

describe('Pr_Test en <FisrtApp/>',() => {
    
    test('Esta prueba no debe de fallar',() =>{

        const title = 'Hola soy Vegeta';
        const subTitle = 'Malditos insectos';

        const {container , getByText , getAllByText} = render(
        <FirstApp 
        title={title}
        subTitle={subTitle}
        name="Nelson"
        />
        )

        expect(getByText(title)).toBeTruthy();

        const h1 = container.querySelector('h1');


        // "Hola soy Vegeta" === "Hola soy Vegeta" => true
        // expect(h1.innerHTML).toBe(title);

        // "¿¿     Hola soy Vegeta    ??" contains => "Hola soy Vegeta" => true
        expect(h1.innerHTML).toContain(title);


        expect(getAllByText(subTitle)).toBeTruthy();


    })
})