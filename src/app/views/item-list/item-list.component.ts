import { Component, Input } from '@angular/core';
import { Items } from '../views-home/views-home-component.component';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css'],
})
export class ItemListComponent {
  @Input() itemList: Items[] = [];
}
