import { Component, Input } from '@angular/core';
import { NgClass, NgForOf } from '@angular/common';

@Component({
  selector: 'ks-dropdown',
  standalone: true,
  imports: [NgForOf, NgClass],
  templateUrl: './dropdown.component.html',
  styleUrl: './dropdown.component.scss'
})
export class DropdownComponent {
  @Input() options: string[] = [];
  selectedOption: string = '';
  isOpen: boolean = false;

  constructor() {}

  toggleDropdown(): void {
    this.isOpen = !this.isOpen;
  }

  selectOption(event: Event, option: string): void {
    event.preventDefault();
    event.stopPropagation();
    this.selectedOption = option;
    this.isOpen = false;
  }
}
