import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { images } from '../../../../../assets/images';

@Component({
  selector: 'app-banner',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.css'
})
export class BannerComponent {
  numOfBanners = 3;
  banners: string[] = [];

  constructor() {
    for (let i = 0; i < this.numOfBanners; i++) {
      this.banners.push(images[`banner_${i}`]);
    }
  }
}
