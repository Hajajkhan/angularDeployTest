import { TestBed } from '@angular/core/testing';

import { HajajService } from './hajaj.service';

describe('HajajService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HajajService = TestBed.get(HajajService);
    expect(service).toBeTruthy();
  });
});
