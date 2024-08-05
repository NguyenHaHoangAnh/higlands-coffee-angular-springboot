import { Component } from '@angular/core';
import { config } from '../../../config/config';
import { SliderComponent } from './slider/slider.component';
import { BannerComponent } from './banner/banner.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SliderComponent, BannerComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  config: any = config;
}
