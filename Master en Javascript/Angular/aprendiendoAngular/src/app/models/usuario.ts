export class Usuario{
    constructor(
        public nombre: string,
        public apellidos: string,
        public email: string,
        public mensaje: string
    ) {

    }

    toString() {
        return `${this.nombre} ${this.apellidos} ${this.email} ${this.mensaje}`;
    }
}