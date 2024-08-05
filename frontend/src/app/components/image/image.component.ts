import { Component, Input } from '@angular/core';
import { images } from '../../../assets/images';

@Component({
  selector: 'app-image',
  standalone: true,
  imports: [],
  templateUrl: './image.component.html',
  styleUrl: './image.component.css'
})
export class ImageComponent {
  fallBack!: string;
  @Input() src!: string;
  @Input() alt!: string;

  constructor() {}
  
  handleError() {
    this.fallBack = images['no_image'];
  }
}
