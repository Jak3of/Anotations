import { describe, test , expect } from '@jest/globals';

import { render , screen } from '@testing-library/react';
import FirstApp  from '../src/FisrtApp';

describe('Pr_Test en <FisrtApp/>',() => {
    
    const title = 'Hola soy Vegeta';
    const subTitle = 'insecto';
    
    test('debe de hacer match con el snapshot',() =>{
    
        const {container} = render(<FirstApp title={title} subTitle={subTitle} />);

        expect(container).toMatchSnapshot();

        

        

    })

    test('debe de mostrar el titulo',() =>{
            
        render(<FirstApp title={title}  />);
        // lee todo el html en <body></body>
        // screen.debug();
        expect(screen.getByText(title)).toBeTruthy();

    })

    test('debe de mostrar el titulo en un h1',() =>{

        render(<FirstApp title={title}  />);
        expect(screen.getByRole('heading',{level: 1}).innerHTML).toContain( title );
        
    })

    test('debe de mostrar el subtitulo enviado por props', () => { 

        render(<FirstApp title={title}  subTitle={subTitle}  />);
        expect(screen.getAllByText(subTitle).length).toBe(1);

     })


    test('debe de mostrar el subtitulo dentro de algun p', () => {
        
        render(<FirstApp title={title}  subTitle={subTitle}  />);

        expect(screen.getByText(subTitle)).toBeTruthy();
    })
})