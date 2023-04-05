import { TestBed } from '@angular/core/testing';

import { AppRoutingResolver } from './app-routing.resolver';

describe('AppRoutingResolver', () => {
  let resolver: AppRoutingResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(AppRoutingResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
