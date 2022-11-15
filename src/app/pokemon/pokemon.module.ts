import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { PokemonTypeColorPipe } from './pokemon-list/pokemon-type-color.pipe';
import { BorderCardDirective } from './pokemon-list/border-card.directive';
import { PokemonDisplayComponent } from './pokemon-display/pokemon-display.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [
    PokemonListComponent,
    PokemonTypeColorPipe,
    BorderCardDirective,
    PokemonDisplayComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  exports: [
    PokemonListComponent,
    PokemonDisplayComponent
  ]
})
export class PokemonModule { }
