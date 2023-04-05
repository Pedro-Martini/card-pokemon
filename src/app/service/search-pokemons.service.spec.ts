import { TestBed } from '@angular/core/testing';

import { SearchPokemonsService } from './search-pokemons.service';

describe('SearchPokemonsService', () => {
  let service: SearchPokemonsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SearchPokemonsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
