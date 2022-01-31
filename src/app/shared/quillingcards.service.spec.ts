import { TestBed } from '@angular/core/testing';

import { QuillingcardsService } from './quillingcards.service';

describe('QuillingcardsService', () => {
  let service: QuillingcardsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QuillingcardsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
