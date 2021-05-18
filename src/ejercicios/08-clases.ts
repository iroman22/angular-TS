


class personaNormal{
    constructor(
        public nombre: string,
        public direccion: string
    ){}
}


class Heroe extends personaNormal{
    // alterEgo: string;
    // edad: number;
    // nombreReal: number;

    constructor(
        public alterEgo: string,
        public edad?: number,
        public nombreReal?: string
    ){
        super( nombreReal, 'New York, USA' )
    }
}


const ironman = new Heroe('Ironman', 42, 'Tony');

console.log(ironman);