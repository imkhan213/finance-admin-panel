import { CanActivateFn } from '@angular/router';

export const LogedGuard: CanActivateFn = (route, state) => {
  return true;
};
