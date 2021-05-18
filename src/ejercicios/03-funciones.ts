



function sumar(a: number, b:number){
    return a+b;
}

const sumarFlecha = (a: number, b:number): number =>{
    return a + b;
}

function multiplicar(numero, otroNumero, base:number = 3){
    return numero * base;
}

interface PersonajeLOR{
    nombre: string;
    pv: number;
    mostrarHP: (a:number, b:string, c:boolean) => void;
}

function curar(personaje: PersonajeLOR, curarX ): void{
    personaje.pv += curarX;
}

const nuevoPersonaje: PersonajeLOR = {
        nombre: 'Strider',
        pv: 50,
        mostrarHP(){
            console.log('Puntos de Vida', this.pv)
        }
}