import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { CardPokemonComponent } from './card-pokemon/card-pokemon.component';



@NgModule({
  declarations: [
    CardPokemonComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    CardPokemonComponent
  ]
})
export class PageModule { }
