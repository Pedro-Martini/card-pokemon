import { ResultPokemons } from 'src/app/model/result-pokemons';
import { SearchPokemonsService } from './../../service/search-pokemons.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-pokemon',
  templateUrl: './card-pokemon.component.html',
  styleUrls: ['./card-pokemon.component.css']
})
export class CardPokemonComponent implements OnInit {

  objectSquirtle!: ResultPokemons;
  objectPikachu!: ResultPokemons;
  objectMewto!: ResultPokemons;

  constructor(private searchPokemonsService: SearchPokemonsService) { }

  ngOnInit(): void {
    this.search1();
    this.search2();
    this.search3();
  }

  search1(){
    this.searchPokemonsService.searchPokemonSquirtle().subscribe({
      next: (dados) => {
        this.objectSquirtle = dados;
      },
      error: (erro) => {
        if (erro.status == 400) {
          alert('Ocorreu um erro na pesquisa.')
        } else {
          alert('Ocorreu um erro na comunicação.')
        }
      }
    })
  }

  search2(){
    this.searchPokemonsService.searchPokemonPikachu().subscribe({
      next: (dados) => {
        this.objectPikachu = dados;
      },
      error: (erro) => {
        if (erro.status == 400) {
          alert('Ocorreu um erro na pesquisa do pokemon.')
        } else {
          alert('Ocorreu um erro na comunicação.')
        }
      }
    })
  }

  search3(){
    this.searchPokemonsService.searchPokemonMewtwo().subscribe({
      next: (dados) => {
        this.objectMewto = dados;
      },
      error: (erro) => {
        if (erro.status == 400) {
          alert('Ocorreu um erro na pesquisa do pokemon.')
        } else {
          alert('Ocorreu um erro na comunicação.')
        }
      }
    })
  }
}


