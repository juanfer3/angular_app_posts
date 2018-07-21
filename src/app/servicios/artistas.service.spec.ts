import { TestBed, inject } from '@angular/core/testing';

import { ArtistasService } from './artistas.service';

describe('ArtistasService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ArtistasService]
    });
  });

  it('should be created', inject([ArtistasService], (service: ArtistasService) => {
    expect(service).toBeTruthy();
  }));
});
