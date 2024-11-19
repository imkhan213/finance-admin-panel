import { TestBed } from '@angular/core/testing';

import { CommService } from './comm.service';

describe('CommService', () => {
  let service: CommService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
