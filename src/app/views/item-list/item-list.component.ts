import { Component, Input } from '@angular/core';
import { Items } from '../views-home/views-home-component.component';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css'],
})
export class ItemListComponent {
  @Input() itemList: Items[] = [];

  constructor() {
    console.log(this.itemList);
  }

  // when the components mounts after that ngOnInit() is called.
  ngOnInit() {
    console.log(this.itemList);
  }
}
