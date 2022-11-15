import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonDisplayComponent } from './pokemon/pokemon-display/pokemon-display.component';
import { PokemonListComponent } from './pokemon/pokemon-list/pokemon-list.component';

const routes: Routes = [
  {path: 'pokemon-list', component: PokemonListComponent},
  {path: 'pokemon/:id', component: PokemonDisplayComponent},
  {path: '', redirectTo: 'pokemon-list', pathMatch: 'full'},
  //{path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
