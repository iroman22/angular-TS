



let habilidades: (boolean | string | number)[] = ['bash', 'counter', 'healing', 100];

habilidades.push(0);

interface Personaje {
    nombre: string;
    hp: number;
    habilidades: string[];
    puebloNatal?: string;
}


const personaje: Personaje = {
    nombre: 'Strider',
    hp: 100,
    habilidades: ['bash', 'counter', 'healing']
}

personaje.puebloNatal = 'Pueblo Paleta';    

console.table(personaje);