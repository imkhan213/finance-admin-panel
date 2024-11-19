import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ButtonComponent } from '../../../../../shared/components/button/button.component';
import { InputComponent } from '../../../../../shared/components/input/input.component';
import { CommService } from '../../../../../shared/services/common/comm.service';

@Component({
  selector: 'add-acc',
  standalone: true,
  imports: [CommonModule, ButtonComponent, InputComponent],
  templateUrl: './add-acc.component.html',
  styleUrl: './add-acc.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddAccComponent {
  private readonly comm = inject(CommService);

  openSuccess() {
    this.comm.openToastMsg('Account created successfully', 'success');
  }
}
