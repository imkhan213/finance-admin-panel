import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  input,
  InputSignal,
  output,
  signal,
  ViewChild,
} from '@angular/core';
import { Calendar, CalendarModule } from 'primeng/calendar';
import { AsyncPipe, CommonModule, LowerCasePipe } from '@angular/common';
import { IconComponent } from '../icon/icon.component';
import { CommService } from '../../services/common/comm.service';
import { FormsModule } from '@angular/forms';
import { ValidCondition } from '../../../core/models/auth.interface';
import { SelectionMode } from '../../models/shared.interface';

@Component({
  selector: 'datepicker',
  standalone: true,
  imports: [
    CalendarModule,
    LowerCasePipe,
    IconComponent,
    CommonModule,
    AsyncPipe,
    FormsModule,
  ],
  templateUrl: './datepicker.component.html',
  styleUrl: './datepicker.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DatepickerComponent {
  public comm = inject(CommService);

  @ViewChild('calendar') calendar!: Calendar;

  disabled: InputSignal<boolean> = input<boolean>(false);
  isRequired: InputSignal<boolean> = input<boolean>(false);
  selectionMode: InputSignal<SelectionMode> = input<SelectionMode>('single');
  isValid: InputSignal<ValidCondition> = input<ValidCondition>({
    cond1: false,
    form_submit: false,
  });
  datLabel: InputSignal<string> = input<string>('');
  placeholder: InputSignal<string> = input.required<string>();
  validText: InputSignal<string> = input<string>('');
  addCls: InputSignal<string> = input<string>('');
  max = signal<Date>(new Date());

  dateChng = output<string>({ alias: 'date' });

  dateSingleValue = signal<string>('');
  dateRangeValue = signal<Date[]>([
    new Date(
      new Date().getFullYear(),
      new Date().getMonth() - 1,
      new Date().getDate(),
    ),
    new Date(),
  ]);

  private readonly baseClass =
    '!tw-text-sm tw-transition-all tw-duration-200 tw-ease-in placeholder:tw-text-[13px] placeholder:tw-text-slate-500';
  private readonly modeSingleClass =
    'tw-p-[0.4rem] tw-text-black tw-rounded-xl tw-border-2 tw-border-stroke-100 tw-ring-offset-2  focus:tw-border-azure-500 focus:tw-ring-2 focus:tw-ring-azure-200  tw-px-4';
  private readonly modeRangeClass =
    'tw-bg-azure-400/60 tw-border-none tw-h-10 !tw-shadow-none tw-text-white placeholder:tw-text-white placeholder:!tw-text-sm';

  styleClass = computed(() => {
    const classes = [this.baseClass, this.addCls()];
    if (this.selectionMode() === 'single') classes.push(this.modeSingleClass);
    if (this.disabled()) classes.push('tw-pointer-events-none');
    if (this.selectionMode() === 'range') classes.push(this.modeRangeClass);
    return classes.join(' ');
  });

  dateChange(value: any) {
    if (this.selectionMode() === 'single') {
      this.dateSingleValue.set(value);
    } else if (
      this.selectionMode() === 'range' &&
      value[0] !== null &&
      value[1] !== null
    ) {
      this.dateRangeValue.set(value);
      this.comm.updateDate(value);
    }
    this.dateChng.emit(value);
  }

  openCalendar() {
    this.calendar.inputfieldViewChild?.nativeElement.focus();
  }
}
