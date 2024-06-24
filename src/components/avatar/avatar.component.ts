import { Component, input } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'ks-avatar',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './avatar.component.html',
  styleUrl: './avatar.component.scss'
})
export class AvatarComponent {
  imageUrl = input('assets/placeholder.png');
  size = input(100);
}
