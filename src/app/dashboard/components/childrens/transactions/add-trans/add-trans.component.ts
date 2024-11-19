import {
  ChangeDetectionStrategy,
  Component,
  inject,
  model,
  signal,
} from '@angular/core';
import { DatepickerComponent } from '../../../../../shared/components/datepicker/datepicker.component';
import { DropdownComponent } from '../../../../../shared/components/dropdown/dropdown.component';
import { dropDownList } from '../../../../../shared/models/shared.interface';
import { InputNumberModule } from 'primeng/inputnumber';
import { FormsModule } from '@angular/forms';
import { InputComponent } from '../../../../../shared/components/input/input.component';
import { ButtonComponent } from '../../../../../shared/components/button/button.component';
import { IconComponent } from '../../../../../shared/components/icon/icon.component';
import { CommonModule } from '@angular/common';
import { CommService } from '../../../../../shared/services/common/comm.service';
import { TooltipModule } from 'primeng/tooltip';

@Component({
  selector: 'add-trans',
  standalone: true,
  imports: [
    DatepickerComponent,
    DropdownComponent,
    InputNumberModule,
    FormsModule,
    InputComponent,
    ButtonComponent,
    IconComponent,
    CommonModule,
    TooltipModule,
  ],
  templateUrl: './add-trans.component.html',
  styleUrl: './add-trans.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddTransComponent {
  private readonly comm = inject(CommService);

  readonly numberInputClass =
    'tw-rounded-md tw-border-solid  tw-py-1.5 tw-border-2 tw-border-gray-200 tw-h-10 tw-outline-0 tw-px-4 tw-w-full focus:tw-shadow-none tw-text-sm focus-within:!tw-ring-2 focus-within:!tw-ring-azure-200 focus-within:!tw-ring-offset-2 focus-within:!tw-border-azure-500 focus-within:!tw-border-2 focus-within:!tw-border-solid tw-ps-12 ';

  dropItemList = signal<dropDownList[]>([
    { name: 'All account', id: 1 },
    { name: 'Checking', id: 2 },
    { name: 'Saving', id: 3 },
  ]);
  amount = model<number>(0);

  openSuccess() {
    this.comm.openToastMsg('Transaction added successfully', 'success');
  }
}
