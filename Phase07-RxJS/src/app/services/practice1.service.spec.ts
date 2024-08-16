import { TestBed } from '@angular/core/testing';

import { Practice1Service } from './practice1.service';

describe('Practice1Service', () => {
  let service: Practice1Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Practice1Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
