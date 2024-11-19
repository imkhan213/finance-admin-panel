import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { InputComponent } from '../../../../../shared/components/input/input.component';
import { ButtonComponent } from '../../../../../shared/components/button/button.component';
import { CommService } from '../../../../../shared/services/common/comm.service';

@Component({
  selector: 'add-cat',
  standalone: true,
  imports: [CommonModule, InputComponent, ButtonComponent],
  templateUrl: './add-cat.component.html',
  styleUrl: './add-cat.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddCatComponent {
  private readonly comm = inject(CommService);

  openSuccess() {
    this.comm.openToastMsg('Category created successfully', 'success');
  }
}
