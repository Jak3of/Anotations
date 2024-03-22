export function getSaludo(nombre) {
	return 'Hola ' + nombre
}

// console.log(`este es un texto: ${getSaludo(nombre)}`)


export const getUser = () => ({
	uid: 'ABC123',
	username: 'Nelson'
})




export const getUsuarioActivo = (nombre) => ({
	uid: 'ABC123',
	username: nombre
})