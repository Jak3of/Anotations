
import { render , screen } from '@testing-library/react';
import { GifItem } from '../../src/components';

describe('Pr_Test <GifItem /> ', () => {

    const title = 'Saitama';

    const url = 'https://one-punch.com/saitama.jpg';

    test('Debe de hacer match con el snapshot', () => {
        
        const { container } = render(<GifItem title={title} url={url} id={title} />);
        expect(container).toMatchSnapshot();
    })

    test('Debe de mostrar la imagen con el URL y el ALT indicado', () => {
        render(<GifItem title={title} url={url} id={title} />);
        const { src , alt } = screen.getByRole('img');

        expect(src).toBe(url);
        expect(alt).toBe(title);
    })

    test('Debe de mostrar el título en el componente', () => {
        render(<GifItem title={title} url={url} id={title} />);
        // se ve algun texto
        expect(screen.getByText(title)).toBeTruthy();
    })

    
    
})