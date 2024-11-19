import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';
import { LogedGuard } from './loged.guard';

describe('logedGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) =>
    TestBed.runInInjectionContext(() => LogedGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
