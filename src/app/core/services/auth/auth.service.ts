import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CommService } from '../../../shared/services/common/comm.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly route = inject(Router);
  private readonly comm = inject(CommService);

  logout(): void {
    this.route.navigate(['/auth/signin']);
    this.comm.openToastMsg('logged out successfully.', 'success');
  }
}
