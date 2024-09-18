import { TestBed } from '@angular/core/testing';

import { LearningsignalService } from './learningsignal.service';

describe('LearningsignalService', () => {
  let service: LearningsignalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LearningsignalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
