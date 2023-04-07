import { SearchPokemonsService } from './../../service/search-pokemons.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-pokemon',
  templateUrl: './card-pokemon.component.html',
  styleUrls: ['./card-pokemon.component.css']
})
export class CardPokemonComponent implements OnInit {

  constructor(private searchPokemonsService: SearchPokemonsService) { }

  ngOnInit(): void {
    this.search1();
    this.search2();
    this.search3();
  }

  search1(){
    this.searchPokemonsService.searchPokemonMewtwo().subscribe({
      next: (dados) => {
        console.log(dados)
      },
      error: (erro) => {
        if (erro.status == 400) {
          console.log('Ocorreu um erro na pesquisa.')
        } else {
          console.log('Ocorreu um erro na pesquisa.')
        }
      }
    })
  }

  search2(){
    this.searchPokemonsService.searchPokemonPikachu().subscribe({
      next: (dados) => {
        console.log(dados)
      },
      error: (erro) => {
        if (erro.status == 400) {
          console.log('Ocorreu um erro na pesquisa.')
        } else {
          console.log('Ocorreu um erro na pesquisa.')
        }
      }
    })
  }

  search3(){
    this.searchPokemonsService.searchPokemonSquirtle().subscribe({
      next: (dados) => {
        console.log(dados)
      },
      error: (erro) => {
        if (erro.status == 400) {
          console.log('Ocorreu um erro na pesquisa.')
        } else {
          console.log('Ocorreu um erro na pesquisa.')
        }
      }
    })
  }


}


