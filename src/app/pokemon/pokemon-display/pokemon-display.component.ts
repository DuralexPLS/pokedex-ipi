import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IPokemon, Pokemon } from 'src/app/pokemon.model';

@Component({
  selector: 'app-pokemon-display',
  templateUrl: './pokemon-display.component.html',
  styleUrls: ['./pokemon-display.component.css']
})
export class PokemonDisplayComponent implements OnInit {

  @Input()
  model : IPokemon | null = null;

  @Output()
  emitPokemon: EventEmitter<IPokemon> = new EventEmitter<IPokemon>();

  pokemon: Pokemon|undefined;
  pokemonArray: Array<Pokemon> = new Array<Pokemon>();


  submitted : boolean = false
  pokemonForm = this.fb.group({
    name : [''],
    type1 : [''],
    type2 : ['']
  }, {updateOn : 'submit'})
  
  constructor(private fb: FormBuilder, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.submitted = false;
    if(this.model === null){
      this.model = new Pokemon(0,'','','');
    } else {
      this.pokemonForm.patchValue(this.model!)
    }

    this.pokemonArray.push(new Pokemon(1,"Bulbizarre","Plante","Poison"));
    this.pokemonArray.push(new Pokemon(2,"Pikachu","Electrik",""));

    const pokemonId: string|null = this.route.snapshot.paramMap.get('id');
    if(pokemonId){
      this.pokemon = this.pokemonArray.find(pokemon => pokemon.id == +pokemonId);
    }
  }

  onSubmit(){
    this.submitted = true;
    if(this.pokemonForm.valid){
      this.model = {...this.model!, ...this.pokemonForm.value};
      this.emitPokemon.emit(this.model!)
    }
  }

  resetForm() {
    if(this.model !== null){
      this.pokemonForm.patchValue(this.model)
    }
  }

  goToPokemonList(){
    this.router.navigate(['/pokemon-list']);
  }

}
