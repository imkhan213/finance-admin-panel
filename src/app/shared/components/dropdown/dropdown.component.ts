import { CommonModule } from '@angular/common';
import {
  Component,
  input,
  InputSignal,
  model,
  OnInit,
  ChangeDetectionStrategy,
  computed,
  output,
  ViewChild,
  inject,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  Dropdown,
  DropdownFilterOptions,
  DropdownModule,
} from 'primeng/dropdown';
import { IconComponent } from '../icon/icon.component';
import { dropDownList, dropVariType } from '../../models/shared.interface';
import { CommService } from '../../services/common/comm.service';

@Component({
  selector: 'dropdown',
  standalone: true,
  imports: [DropdownModule, CommonModule, FormsModule, IconComponent],
  templateUrl: './dropdown.component.html',
  styleUrl: './dropdown.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DropdownComponent implements OnInit {
  private readonly comm = inject(CommService);
  @ViewChild('dropdown') dropdown!: Dropdown;

  placeholder: InputSignal<string> = input.required<string>();
  dropList: InputSignal<dropDownList[]> = input.required<dropDownList[]>();
  selectItem: InputSignal<dropDownList> = input<dropDownList>({
    name: '',
    id: 0,
  });
  addCls: InputSignal<string> = input<string>('');
  filter: InputSignal<boolean> = input<boolean>(false);
  type: InputSignal<dropVariType> = input<dropVariType>('solid');
  dropListSelection = output<string>();
  selectedItemModel = model<dropDownList>();

  typeValue = model<string>('');

  styleClass = computed(() => {
    const classes = [
      this.addCls(),
      'tw-min-w-40 tw-h-10 tw-py-2 tw-px-4 tw-ring-0 max-sm:tw-cursor-auto',
    ];
    if (this.type() === 'solid')
      classes.push(
        ' placeholder:tw-text-white tw-bg-azure-400/60 tw-text-white  tw-border-none ',
      );
    if (this.type() === 'stroke')
      classes.push(
        'placeholder:!tw-text-black  tw-border-2 tw-border-gray-200 hover:!tw-border-gray-200',
      );
    return classes.join(' ');
  });

  ngOnInit(): void {
    this.selectedItemModel.set(this.selectItem());
  }

  public selcChng(event: dropDownList): void {
    this.selectedItemModel.set(event);
    if (this.type() === 'stroke') {
      this.dropListSelection.emit(event.name);
    }
  }

  customFilterFunction(event: KeyboardEvent, options: DropdownFilterOptions) {
    if (options.filter) {
      options.filter(event);
    } else {
      console.warn('Filter function is not defined');
    }
  }

  onDropdownClick(event: MouseEvent) {
    event.stopPropagation();
    this.dropdown.hide();
    this.dropdown.clear();
    this.typeValue.set('');
    this.comm.openToastMsg('New item added successfully', 'success');
  }
}
