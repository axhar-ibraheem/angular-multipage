import { Component, Input } from '@angular/core';
import {
  Person,
  Headers,
} from '../collections-home/collections-home.component';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent {
  @Input() data: Person[] = [];
  @Input() headers: Headers[] = [];
}
