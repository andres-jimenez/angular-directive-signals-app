import { Component, signal } from '@angular/core';
import { MenuItem } from '../../interfaces/menu-item.interfaces';

@Component({
  selector: 'signals-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css'],
})
export class SideMenuComponent {
  public menuItems = signal<MenuItem[]>([
    { title: 'Counter', route: 'counter' },
    { title: 'User Info', route: 'user-info' },
    { title: 'Properties', route: 'properties' },
  ]);

  // public menuItems: MenuItem[] = [
  //   { title: 'Counter', route: 'counter' },
  //   { title: 'User Info', route: 'user-info' },
  //   { title: 'Properties', route: 'properties' },
  // ];
}
