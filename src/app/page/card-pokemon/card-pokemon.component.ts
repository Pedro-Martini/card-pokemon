import { Component, OnInit } from '@angular/core';
import { ResultPokemons } from 'src/app/model/result-pokemons';
import { SearchPokemonsService } from './../../service/search-pokemons.service';
import { catchError, finalize } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-card-pokemon',
  templateUrl: './card-pokemon.component.html',
  styleUrls: ['./card-pokemon.component.css']
})
export class CardPokemonComponent implements OnInit {
  // Inicialização segura dos objetos
  objectSquirtle: ResultPokemons | null = null;
  objectPikachu: ResultPokemons | null = null;
  objectMewto: ResultPokemons | null = null;
  
  // Indicador de carregamento
  loading = true;
  
  // Indicadores de erro para cada Pokémon
  squirtleError = false;
  pikachuError = false;
  mewtoError = false;

  constructor(private SearchPokemonsService: SearchPokemonsService) { }

  ngOnInit(): void {
    this.loadPokemonData();
  }

  loadPokemonData(): void {
    this.SearchPokemonsService.searchPokemonSquirtle()
      .pipe(
        catchError(error => {
          console.error('Erro ao carregar Squirtle:', error);
          this.squirtleError = true;
          return of(null);
        }),
        finalize(() => {
          this.checkLoadingComplete();
        })
      )
      .subscribe(data => {
        if (data) {
          this.objectSquirtle = data;
        }
      });
    
    this.SearchPokemonsService.searchPokemonPikachu()
      .pipe(
        catchError(error => {
          console.error('Erro ao carregar Pikachu:', error);
          this.pikachuError = true;
          return of(null);
        }),
        finalize(() => {
          this.checkLoadingComplete();
        })
      )
      .subscribe(data => {
        if (data) {
          this.objectPikachu = data;
        }
      });
    
    this.SearchPokemonsService.searchPokemonMewtwo()
      .pipe(
        catchError(error => {
          console.error('Erro ao carregar Mewtwo:', error);
          this.mewtoError = true;
          return of(null);
        }),
        finalize(() => {
          this.checkLoadingComplete();
        })
      )
      .subscribe(data => {
        if (data) {
          this.objectMewto = data;
        }
      });
  }

  private checkLoadingComplete(): void {
    if (
      (this.objectSquirtle !== null || this.squirtleError) &&
      (this.objectPikachu !== null || this.pikachuError) &&
      (this.objectMewto !== null || this.mewtoError)
    ) {
      this.loading = false;
    }
  }

  reloadData(): void {
    this.loading = true;
    this.squirtleError = false;
    this.pikachuError = false;
    this.mewtoError = false;
    this.loadPokemonData();
  }
}
