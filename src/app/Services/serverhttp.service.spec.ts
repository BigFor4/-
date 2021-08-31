import { TestBed } from '@angular/core/testing';

import { ServerhttpService } from './serverhttp.service';

describe('ServerhttpService', () => {
  let service: ServerhttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServerhttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
