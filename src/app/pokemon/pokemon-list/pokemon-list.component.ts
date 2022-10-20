import { Component, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/pokemon';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit {

  pokemonArray: Array<Pokemon> = new Array<Pokemon>();

  constructor() { }

  ngOnInit(): void {
    this.pokemonArray.push(new Pokemon(1,"Bulbizarre",["Plante","Poison"]));
    this.pokemonArray.push(new Pokemon(2,"Pikachu",["Elektrik"]));
  }

}
