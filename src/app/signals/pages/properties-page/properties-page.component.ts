import { Component, OnDestroy, computed, effect, signal } from '@angular/core';
import { User } from '../../interfaces/user-info.interfaces';

@Component({
  templateUrl: './properties-page.component.html',
  styleUrls: ['./properties-page.component.css'],
})
export class PropertiesPageComponent implements OnDestroy {
  public counter = signal(10);

  public user = signal<User>({
    id: 1,
    email: 'andresfjz@hotmail.com',
    first_name: 'Andrés',
    last_name: 'Jiménez',
    avatar: 'https://reqres.in/img/faces/1-image.jpg',
  });

  public fullName = computed(
    () => `${this.user().first_name} ${this.user().last_name}`
  );

  public userChangedEffect = effect(() => {
    console.log(`${this.user().first_name} - ${this.counter()}`);
  });

  ngOnDestroy(): void {
    // this.userChangedEffect.destroy();
  }

  onFieldUpdated(field: keyof User, value: string): void {
    console.log(value);

    console.log(typeof this.user()['id']);

    // this.user.set({ ...this.user(), [field]: value });

    this.user.mutate((current) => {
      current.first_name = value;
    });
  }

  increaseBy(value: number): void {
    this.counter.update((current) => current + value);
  }
}
