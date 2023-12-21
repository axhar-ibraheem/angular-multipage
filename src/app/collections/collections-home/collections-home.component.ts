import { Component, Input } from '@angular/core';

export interface Person {
  name: string;
  age: number;
  job: string;

  [key: string]: any;
}

export interface Headers {
  key: string;
  label: string;
}

@Component({
  selector: 'app-collections-home',
  templateUrl: './collections-home.component.html',
  styleUrls: ['./collections-home.component.css'],
})
export class CollectionsHomeComponent {
  data: Person[] = [
    { name: 'John Doe', age: 25, job: 'Software Developer' },
    { name: 'Jane Smith', age: 30, job: 'Graphic Designer' },
    { name: 'Bob Johnson', age: 22, job: 'Data Analyst' },
    // { name: 'Alice Brown', age: 28, job: 'Marketing Manager' },
    // { name: 'Charlie Williams', age: 35, job: 'Project Manager' },
    // { name: 'Eva Davis', age: 27, job: 'UX Designer' },
    // { name: 'Frank White', age: 32, job: 'Product Manager' },
    // { name: 'Grace Wilson', age: 26, job: 'Financial Analyst' },
    // { name: 'Henry Taylor', age: 31, job: 'Customer Support Representative' },
    // { name: 'Isabel Miller', age: 29, job: 'HR Specialist' },
  ];
  headers: Headers[] = [
    {
      key: 'name',
      label: 'Name',
    },
    {
      key: 'age',
      label: 'Age',
    },
    {
      key: 'job',
      label: 'Job',
    },
  ];
}
