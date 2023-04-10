import { ResultPokemons } from './../model/result-pokemons';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

const API_URL = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})

export class SearchPokemonsService {

  constructor(private http: HttpClient) { }

  searchPokemonMewtwo(): Observable<ResultPokemons>{
    const result = this.http.get<ResultPokemons>(API_URL + 'pokemon/mewtwo')
    return result
  }

  searchPokemonSquirtle(): Observable<ResultPokemons>{
    const result = this.http.get<ResultPokemons>(API_URL + 'pokemon/squirtle')
    return result
  }

  searchPokemonPikachu(): Observable<ResultPokemons>{
    const result = this.http.get<ResultPokemons>(API_URL + 'pokemon/pikachu')
    return result
  }

}
