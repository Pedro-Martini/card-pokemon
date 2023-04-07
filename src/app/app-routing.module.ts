import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardPokemonComponent } from './page/card-pokemon/card-pokemon.component';

const routes: Routes = [
  {
    path: '',
    component: CardPokemonComponent,
    children: [
      { path: 'card', component: CardPokemonComponent },
      { path: '**', pathMatch: 'full', redirectTo: 'card' }
    ]
  }
];

[]
{}

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
