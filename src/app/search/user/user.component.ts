import { Component, Input } from '@angular/core';
import { Item } from 'src/app/types/user.types';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent {
  @Input()
  user: Item | undefined;
}
