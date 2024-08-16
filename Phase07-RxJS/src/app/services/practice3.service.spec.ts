import { TestBed } from '@angular/core/testing';

import { Practice3Service } from './practice3.service';

describe('Practice3Service', () => {
  let service: Practice3Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Practice3Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
