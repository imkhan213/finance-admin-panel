import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  inject,
  input,
  InputSignal,
  output,
  signal,
} from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { IconComponent } from '../icon/icon.component';
import { ButtonComponent } from '../button/button.component';
import { CommService } from '../../services/common/comm.service';

@Component({
  selector: 'confirm-dialog',
  standalone: true,
  imports: [CommonModule, ConfirmDialogModule, IconComponent, ButtonComponent],
  templateUrl: './confirm-dialog.component.html',
  styleUrl: './confirm-dialog.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [ConfirmationService, MessageService],
})
export class ConfirmDialogComponent {
  message: InputSignal<string> = input.required<string>();
  header: InputSignal<string> = input.required<string>();
  icon: InputSignal<string> = input.required<string>();
  msg: InputSignal<string> = input<string>('');

  onConfirm = output<any>();
  onReject = output<any>();

  isShow = signal<boolean>(true);

  private readonly comm = inject(CommService);
  private readonly confirmationService = inject(ConfirmationService);

  showDialog(): void {
    this.confirmationService.confirm({
      message: this.message(),
      header: this.header(),
      icon: this.icon(),
      accept: () => {
        this.delete();
      },
      reject: () => {
        this.cancel();
      },
    });
  }

  cancel(): void {
    this.confirmationService.close();
    this.onReject.emit('cancel');
  }

  delete(): void {
    this.confirmationService.close();
    this.onConfirm.emit('success');
    this.comm.openToastMsg(this.msg(), 'success');
  }
}
