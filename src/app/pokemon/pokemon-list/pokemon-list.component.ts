import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IPokemon, Pokemon } from 'src/app/pokemon.model';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit {

  pokemonArray: Array<Pokemon> = new Array<Pokemon>();
  currentPokemon: IPokemon | undefined | null;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.pokemonArray.push(new Pokemon(1,"Bulbizarre","Plante","Poison"));
    this.pokemonArray.push(new Pokemon(2,"Pikachu","Electrik",""));
  }

  setCurrentPokemon(pokemon: IPokemon){
    this.currentPokemon = null;
    setTimeout(() => {this.currentPokemon = pokemon;},10);
  }

  updateList(pokemon: IPokemon){
    let indexItem: number = this.pokemonArray.findIndex(p => p.id === pokemon.id);
    this.pokemonArray[indexItem] = {...this.pokemonArray[indexItem], ...pokemon};
  }

  goToPokemon(id: number){
    this.router.navigate(['/pokemon',id]);
  }

}
