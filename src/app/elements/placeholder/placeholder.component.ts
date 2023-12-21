import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-placeholder',
  templateUrl: './placeholder.component.html',
  styleUrls: ['./placeholder.component.css'],
})
export class PlaceholderComponent {
  @Input('headerSection') header: boolean = true;
  @Input('noOfLines') lines: number = 3;
}
