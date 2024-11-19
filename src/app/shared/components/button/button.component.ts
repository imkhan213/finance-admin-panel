import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  computed,
  input,
  InputSignal,
  signal,
  OnInit,
  inject,
} from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { btnType } from '../../models/shared.interface';

@Component({
  selector: 'btn',
  standalone: true,
  imports: [ButtonModule, CommonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonComponent implements OnInit {
  private readonly primengConfig = inject(PrimeNGConfig);

  disabled: InputSignal<boolean> = input<boolean>(false);
  active: InputSignal<boolean> = input<boolean>(false);
  type = input<btnType>('solid');
  addCls = input<string>('');

  private readonly baseClasses =
    'tw-w-full tw-justify-center tw-text-sm tw-rounded-lg tw-h-10 tw-outline-none max-sm:tw-cursor-auto';
  private readonly lightClasses =
    'tw-bg-transparent tw-text-white xl:tw-cursor-pointer tw-transition-all tw-ease-in tw-duration-200 hover:tw-bg-gray-50/20 tw-py-2 tw-px-4 tw-rounded-md tw-border-none tw-ring-0';
  private readonly activeClasses =
    '!tw-bg-gray-50/10 tw-ring-0 tw-py-2 tw-px-4 tw-border-none';
  private readonly outlineClasses =
    'tw-bg-transparent  tw-border-2 tw-border-solid tw-border-gray-300/50 tw-h-9 !tw-py-1 tw-px-4 tw-rounded-md tw-text-black tw-ring-0 hover:tw-bg-gray-300/10 tw-transition-all tw-ease-in tw-duration-200';

  public readonly buttonClasses = computed(() => {
    const classes = [this.addCls(), this.baseClasses];
    if (this.type() === 'light') classes.push(this.lightClasses);
    if (this.type() === 'outline') classes.push(this.outlineClasses);
    if (this.active()) classes.push(this.activeClasses);
    if (this.disabled()) classes.push('tw-pointer-events-none');
    return classes.join(' ');
  });

  ngOnInit(): void {
    this.primengConfig.ripple = this.type() !== 'light';
  }
}
