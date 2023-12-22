import { Component } from '@angular/core';

export interface Stats {
  value: number;
  label: string;
}

export interface Items {
  image: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-views-home-component',
  templateUrl: './views-home-component.component.html',
  styleUrls: ['./views-home-component.component.css'],
})
export class ViewsHomeComponentComponent {
  stats: Stats[] = [
    {
      value: 22,
      label: '# of users',
    },
    {
      value: 900,
      label: 'Revenue',
    },
    {
      value: 50,
      label: 'Reviews',
    },
  ];
  items: Items[] = [
    {
      image: '/assets/couch.jpeg',
      title: 'Couch',
      description: 'A Great Couch',
    },
    {
      image: '/assets/dresser.jpeg',
      title: 'Dresser',
      description: 'This is a great dresser',
    },
  ];
}
