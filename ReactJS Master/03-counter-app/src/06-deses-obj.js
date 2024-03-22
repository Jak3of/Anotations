

export const usContext = ({ clave , nombre , edad , rango = 'Capitan' }) => {

    return {
        nombreClave: clave,
        petName : nombre,
        petRango : rango,
        anios : edad,
        latlng : {
            lat : 14.1232,
            lng : -12.3232
        }
    }
}

export const retornaArreglo = () => {

    return ['ABC', 123];
}