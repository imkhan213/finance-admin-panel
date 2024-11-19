import { Injectable } from '@angular/core';
import { AnimationItem } from 'lottie-web';

@Injectable({
  providedIn: 'root',
})
export class LottieSerService {
  private animationItems = new Map<string, AnimationItem>();
  public isMenuOpen = false; // Track the animation state

  animationCreated(id: string, animationItem: AnimationItem): void {
    this.animationItems.set(id, animationItem);
  }

  playAnimation(id: string): void {
    const animation = this.animationItems.get(id);
    if (animation) {
      animation.play();
    }
  }

  toggleAnimation(id: string): void {
    const animation = this.animationItems.get(id);
    if (animation) {
      if (this.isMenuOpen) {
        animation.setDirection(-1); // Set to play in reverse
        animation.play();
      } else {
        animation.setDirection(1); // Set to play forward
        animation.play();
      }
      this.isMenuOpen = !this.isMenuOpen; // Toggle the state
    }
  }

  stopAnimation(id: string): void {
    const animation = this.animationItems.get(id);
    if (animation) {
      animation.stop();
    }
  }
}
