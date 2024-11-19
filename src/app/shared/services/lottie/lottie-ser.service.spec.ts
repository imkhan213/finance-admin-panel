import { TestBed } from '@angular/core/testing';
import { LottieSerService } from './lottie-ser.service';

describe('LottieSerService', () => {
  let service: LottieSerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LottieSerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
