import { TestBed } from '@angular/core/testing';

import { Practice4Service } from './practice4.service';

describe('Practice4Service', () => {
  let service: Practice4Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Practice4Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
