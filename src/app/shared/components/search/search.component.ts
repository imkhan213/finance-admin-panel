import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  input,
  output,
} from '@angular/core';
import { IconComponent } from '../icon/icon.component';

@Component({
  selector: 'search',
  standalone: true,
  imports: [CommonModule, IconComponent],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchComponent {
  placeholder = input.required<string>();
  maxlength = input<number>(80);
  inptValue = output<string>();
  addInpClass = input<string>();

  inputValue(event: Event) {
    const target = event.target as HTMLInputElement;
    this.inptValue.emit(target.value);
  }
}
