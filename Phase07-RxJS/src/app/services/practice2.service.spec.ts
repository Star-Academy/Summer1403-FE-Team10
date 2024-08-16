import { TestBed } from '@angular/core/testing';

import { Practice2Service } from './practice2.service';

describe('Practice2Service', () => {
  let service: Practice2Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Practice2Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
