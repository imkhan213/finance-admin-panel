import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
  InputSignal,
  signal,
} from '@angular/core';

@Component({
  selector: 'icon',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './icon.component.html',
  styleUrl: './icon.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconComponent {
  name: InputSignal<string> = input.required<string>();
  type: InputSignal<string> = input<string>('primary');
  addCls: InputSignal<string> = input<string>('');

  public readonly iconName = computed(() => {
    return `'${this.iconList[this.name()]}'`;
  });

  iconList: Record<string, string> = {
    'eye': '\uE000',
    'eye-off': '\uE001',
    'calendar': '\uE002',
    'logout': '\uE003',
    'chv-d': '\uE004',
    'grph-rise': '\uE005',
    'grph-down': '\uE006',
    'bag': '\uE007',
    'line-chr': '\uE008',
    'bar-chr': '\uE009',
    'pie-chr': '\uE00A',
    'radial-chr': '\uE00B',
    'add': '\uE00C',
    'search': '\uE00D',
    'more': '\uE00E',
    'info': '\uE00F',
    'minus': '\uE010',
    'plus': '\uE011',
    'check-fill': '\uE012',
    'close-fill': '\uE013',
    'close': '\uE014',
    'menu': '\uE015',
    'setting': '\uE016',
    'overview': '\uE017',
    'user': '\uE018',
    'transactions': '\uE019',
    'category': '\uE01A',
  };
}
