import {
  ChangeDetectionStrategy,
  Component,
  inject,
  input,
  Optional,
  signal,
} from '@angular/core';
import { IconComponent } from '../icon/icon.component';
import { CommonModule } from '@angular/common';
import { toastIconType } from '../../models/shared.interface';
import {
  MAT_SNACK_BAR_DATA,
  MatSnackBarRef,
} from '@angular/material/snack-bar';

@Component({
  selector: 'app-toast',
  standalone: true,
  imports: [IconComponent, CommonModule],
  templateUrl: './toast.component.html',
  styleUrl: './toast.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ToastComponent {
  private readonly data = inject(MAT_SNACK_BAR_DATA);
  private readonly snackBar = inject(MatSnackBarRef);

  msg = signal<string>('');
  iconType = signal<toastIconType>('success');

  constructor() {
    this.msg.set(this.data.msg);
    this.iconType.set(this.data.iconType);
  }

  close(): void {
    this.snackBar.dismiss();
  }
}
