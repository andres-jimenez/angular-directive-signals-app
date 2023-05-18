import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-counter-page',
  templateUrl: './counter-page.component.html',
  styleUrls: ['./counter-page.component.css'],
})
export class CounterPageComponent {
  public counterValue = signal(10);
  public squareCounter = computed(
    () => this.counterValue() * this.counterValue()
  );

  increaseBy(value: number) {
    this.counterValue.update((current) => current + value);
  }
}
