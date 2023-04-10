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
    this.searchSquirtle();
    this.searchPikachu();
    this.searchMewtwo();
  }

  searchSquirtle(){
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

  searchPikachu(){
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

  searchMewtwo(){
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


