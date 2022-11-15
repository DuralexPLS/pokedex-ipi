export interface IPokemon{
    id: number | null | undefined;
    name: string | null | undefined;
    type1: string | null | undefined;
    type2: string | null | undefined;
}

export class Pokemon implements IPokemon {

    constructor(id: number, name: string, type1: string, type2: string){
        this.id = id;
        this.name = name;
        this.type1 = type1;
        this.type2 = type2;
    }
    id: number | null | undefined;
    name: string | null | undefined;
    type1: string | null | undefined;
    type2: string | null | undefined;
}