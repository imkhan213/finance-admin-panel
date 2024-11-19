import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  forwardRef,
  input,
  InputSignal,
  signal,
} from '@angular/core';
import { icon, ValidCondition } from '../../../core/models/auth.interface';
import {
  ControlValueAccessor,
  FormsModule,
  NG_VALUE_ACCESSOR,
} from '@angular/forms';
import { IconComponent } from '../icon/icon.component';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [CommonModule, FormsModule, IconComponent],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true,
    },
  ],
})
export class InputComponent implements ControlValueAccessor {
  type: InputSignal<string> = input<string>('text');
  inpLabel: InputSignal<string> = input<string>('');
  addCls: InputSignal<string> = input<string>('');
  placeholder: InputSignal<string> = input.required<string>();
  readonly: InputSignal<boolean> = input<boolean>(false);
  disabled: InputSignal<boolean> = input<boolean>(false);
  isRequired: InputSignal<boolean> = input<boolean>(false);
  // value:InputSignal<string | number> = input<string | number>('');
  validText: InputSignal<string> = input<string>('');
  validText2: InputSignal<string> = input<string>('');
  maxLength: InputSignal<number> = input<number>(50);
  isValid: InputSignal<ValidCondition> = input<ValidCondition>({
    cond1: false,
    cond2: false,
    form_submit: false,
  });
  icon: InputSignal<icon> = input<icon>({ name: '', type: 'primary' });

  eyeToggle = signal<boolean>(false);
  inptValue = signal<string>('');

  onChange: (value: string) => void = () => {};
  onTouched: () => void = () => {};

  writeValue(value: string): void {
    this.inptValue.set(value?.trim());
  }

  registerOnChange(fn: (value: string) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  onInputChange(value: string): void {
    this.inptValue.set(value?.trim());
    this.onChange(value.trim());
  }

  onBlur(): void {
    this.onTouched();
  }
}
