interface CamisetaBase {
    // implemetar todos los getters y setters
    setColor(color: string): void;
    getColor(): string;
    setModelo(modelo: string): void;
    getModelo(): string;
    setMarca(marca: string): void;
    getMarca(): string;
    setTalla(talla: string): void;
    getTalla(): string;
    setPrecio(precio: number): void;
    getPrecio(): number;
    toString(): string;

    
}


// como generar un decorador
function estampar(logo: string) {
    return function (target: Function) {
        target.prototype.estampacion = function (): void {
            console.log(`Camiseta estampada con el logo de: ${logo}`);
        }
    }
    
}


@estampar("azul")
class Camiseta implements CamisetaBase {
    private color: string;
    private modelo: string;
    private marca: string;
    private talla: string;
    private precio: number;


    constructor(color: string, modelo: string, marca: string, talla: string, precio: number) {
        this.color = color;
        this.modelo = modelo;
        this.marca = marca;
        this.talla = talla;
        this.precio = precio;
    }

    public getColor(): string {
        return this.color;
    }

    public setColor(color: string): void {
        this.color = color;
    }

    public getModelo(): string {
        return this.modelo;
    }

    public setModelo(modelo: string): void {
        this.modelo = modelo;
    }

    public getMarca(): string {
        return this.marca;
    }

    public setMarca(marca: string): void {
        this.marca = marca;
    }

    public getTalla(): string {
        return this.talla;
    }

    public setTalla(talla: string): void {
        this.talla = talla;
    }

    public getPrecio(): number {
        return this.precio;
    }

    public setPrecio(precio: number): void {
        this.precio = precio;
    }

    public toString(): string {
        return `
            Color: ${this.getColor()}
            Modelo: ${this.getModelo()}
            marca: ${this.getMarca()}
            talla: ${this.getTalla()}
            precio: ${this.getPrecio()}
        `
    }

    public getClasst(): Object {
        return { color: this.color, modelo: this.modelo, marca: this.marca, talla: this.talla, precio: this.precio };
    }


}




var camiseta1 = new Camiseta('Rojo', 'Manga corta', 'Nike' , 'L', 100);

console.log(camiseta1.getTalla());


class Sudadera extends Camiseta {
    public capucha: boolean;

    constructor( capucha: boolean, camiseta: Camiseta) {
        super(camiseta.getColor(), camiseta.getModelo(), camiseta.getMarca(), camiseta.getTalla(), camiseta.getPrecio());
        this.capucha = capucha;
    }
    
    setCapucha(capucha: boolean): void {
        this.capucha = capucha;

    }

    getCapucha(): boolean {
        return this.capucha;
    }

    toString(): string {
        return `
            Color: ${this.getColor()}
            modelos: ${this.getModelo()}
            marca: ${this.getMarca()}
            talla: ${this.getTalla()}
            precio: ${this.getPrecio()}
            Capucha: ${this.getCapucha()}
        `
    }


}


var sudadera_nike = new Sudadera( true, new Camiseta('Rojo', 'Manga corta', 'Nike' , 'L', 100));

console.log(sudadera_nike.toString());

console.log(sudadera_nike.getCapucha());
console.log(sudadera_nike);





