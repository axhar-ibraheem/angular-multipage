import { Component, Input } from '@angular/core';
import { Stats } from '../views-home/views-home-component.component';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css'],
})
export class StatisticsComponent {
  @Input() data: Stats[] = [];
}
