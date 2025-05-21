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
    // Carrega dados do Squirtle usando o método correto
    this.SearchPokemonsService.searchPokemonSquirtle()
      .pipe(
        catchError(error => {
          console.error('Erro ao carregar Squirtle:', error);
          this.squirtleError = true;
          return of(null);
        }),
        finalize(() => {
          // Verifica se todos os Pokémon foram carregados ou tiveram erro
          this.checkLoadingComplete();
        })
      )
      .subscribe(data => {
        if (data) {
          this.objectSquirtle = data;
        }
      });
    
    // Carrega dados do Pikachu usando o método correto
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
    
    // Carrega dados do Mewtwo usando o método correto
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

  // Verifica se todos os Pokémon foram carregados ou tiveram erro
  private checkLoadingComplete(): void {
    if (
      (this.objectSquirtle !== null || this.squirtleError) &&
      (this.objectPikachu !== null || this.pikachuError) &&
      (this.objectMewto !== null || this.mewtoError)
    ) {
      this.loading = false;
    }
  }

  // Método para tentar recarregar os dados em caso de erro
  reloadData(): void {
    this.loading = true;
    this.squirtleError = false;
    this.pikachuError = false;
    this.mewtoError = false;
    this.loadPokemonData();
  }
}
