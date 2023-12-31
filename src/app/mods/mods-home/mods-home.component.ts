import { Component } from '@angular/core';

@Component({
  selector: 'app-mods-home',
  templateUrl: './mods-home.component.html',
  styleUrls: ['./mods-home.component.css'],
})
export class ModsHomeComponent {
  showModal: boolean = false;

  onToggle(): void {
    this.showModal = !this.showModal;
  }
}
