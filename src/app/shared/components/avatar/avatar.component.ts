import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  computed,
  inject,
  Inject,
  input,
  InputSignal,
  signal,
} from '@angular/core';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { IconComponent } from '../icon/icon.component';
import { Router } from '@angular/router';
import { AuthService } from '../../../core/services/auth/auth.service';

@Component({
  selector: 'avatar',
  standalone: true,
  imports: [CommonModule, OverlayPanelModule, IconComponent],
  templateUrl: './avatar.component.html',
  styleUrl: './avatar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AvatarComponent {
  readonly auth = inject(AuthService);

  size: InputSignal<string> = input('medium');
  label: InputSignal<string> = input.required();
  isPopUp: InputSignal<boolean> = input<boolean>(false);

  private readonly colors: readonly string[] = [
    '#1abc9c',
    '#2ecc71',
    '#3498db',
    '#9b59b6',
    '#34495e',
    '#16a085',
    '#27ae60',
    '#2980b9',
    '#8e44ad',
    '#2c3e50',
    '#f1c40f',
    '#e67e22',
    '#e74c3c',
    '#95a5a6',
    '#f39c12',
    '#d35400',
    '#c0392b',
    '#bdc3c7',
    '#7f8c8d',
  ];

  public readonly initialName = computed(() => {
    const name = this.label().split(' ');
    return name.length === 1
      ? name[0].charAt(0).toUpperCase()
      : name[0].charAt(0).toUpperCase() +
          name[name.length - 1].charAt(0).toUpperCase();
  });

  public readonly backgroundColor = computed(() => {
    const index = this.initialName().charCodeAt(0) % this.colors.length;
    return this.colors[index];
  });
}
