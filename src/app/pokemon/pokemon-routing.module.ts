import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonDisplayComponent } from './pokemon-display/pokemon-display.component';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';


const routes: Routes = [
  {path: 'pokemon', component: PokemonListComponent,
   children: [
    {path: 'edit/:id', component: PokemonDisplayComponent},
    {path: 'create', component: PokemonDisplayComponent}
   ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PokemonRoutingModule { }
