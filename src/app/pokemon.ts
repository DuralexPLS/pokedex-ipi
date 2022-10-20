export class Pokemon {
    id: number;
    name: string;
    types: Array<string>;

    constructor(id: number, name: string, types: Array<string>){
        this.id = id;
        this.name = name;
        this.types = types
    }
}