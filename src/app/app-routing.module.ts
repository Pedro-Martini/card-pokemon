import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardPokemonComponent } from './page/card-pokemon/card-pokemon.component';

const routes: Routes = [
  { path: 'card', component: CardPokemonComponent },
];

[]
{}

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
