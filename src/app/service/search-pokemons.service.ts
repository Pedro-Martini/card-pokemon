import { ResultPokemons } from './../model/result-pokemons';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class SearchPokemonsService {

  constructor(private http: HttpClient) { }
  
  searchPokemonSquirtle(): Observable<ResultPokemons>{
    const result = this.http.get<ResultPokemons>(`${environment.corsProxy}${environment.apiUrl + 'pokemon/squirtle'}`)
    return result
  }

  searchPokemonPikachu(): Observable<ResultPokemons>{
    const result = this.http.get<ResultPokemons>(`${environment.corsProxy}${environment.apiUrl + 'pokemon/pikachu'}`)
    return result
  }
  
  searchPokemonMewtwo(): Observable<ResultPokemons>{
    const result = this.http.get<ResultPokemons>(`${environment.corsProxy}${environment.apiUrl + 'pokemon/mewtwo'}`)
    return result
  }
}
