
import { getSaludo , getUser , getUsuarioActivo } from '../src/02-template-string';

import { describe, test ,	expect  } from '@jest/globals';



describe('Pruebas en 02-template-string',()=>{
	test('getsaludo debe de retornar "Hola Fernando"',
		() => {
			const name = 'Fernando';
			const message = getSaludo(name);

			expect(message).toBe(`Hola ${name}`);

		})


	test('getUser debe de retornar un objeto', () => {
			
			const userTest = {
				uid: 'ABC123',
				username: 'Nelson'
			};

			const user = getUser();

			expect(user).toStrictEqual(userTest);
	})

	test('getUsuarioActivo debe de retornar un objeto', () => {
		
		const name = 'Nelson';

		const user = getUsuarioActivo(name);
		expect(user).toStrictEqual({
			uid: 'ABC123',
			username: name
		})
	})
})