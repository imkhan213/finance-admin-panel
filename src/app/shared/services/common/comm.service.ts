import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { inject, Injectable } from '@angular/core';
import { map, Observable, Subject } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ToastComponent } from '../../components/toast/toast.component';
import { toastIconType } from '../../models/shared.interface';

@Injectable({
  providedIn: 'root',
})
export class CommService {
  private snackBar = inject(MatSnackBar);
  private breakpointObserver = inject(BreakpointObserver);

  private dateSubject = new Subject<Date>();
  date$ = this.dateSubject.asObservable();

  isMobile(): Observable<boolean> {
    return this.breakpointObserver
      .observe([Breakpoints.Handset, Breakpoints.Small, Breakpoints.Medium])
      .pipe(map((result) => !result.matches));
  }

  updateDate(date: Date): void {
    this.dateSubject.next(date);
  }

  openToastMsg(msg: string, iconType: toastIconType): void {
    if (!msg && !iconType) return;
    this.snackBar.openFromComponent(ToastComponent, {
      data: { msg, iconType },
      duration: 5 * 1000,
      horizontalPosition: 'start',
      verticalPosition: 'bottom',
    });
  }
}
