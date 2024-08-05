import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { images } from '../../../../../assets/images';

@Component({
  selector: 'app-slider',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.css'
})
export class SliderComponent implements OnInit, OnDestroy {
  numOfSliders: number = 6;
  sliders: string[] = [];
  currentIndex: number = 0;
  interval: any;

  constructor() {
    for (let i = 0; i < this.numOfSliders; i++) {
      this.sliders.push(images[`slider_${i}`]);
    }
  }
  
  ngOnInit() {
    this.autoSlide();
  }

  ngOnDestroy() {
    clearInterval(this.interval);
  }

  setIndex(index: number) {
    this.currentIndex = index;
    // console.log('[index]', this.currentIndex);
  }

  autoSlide() {
    this.interval = setInterval(() => {
      this.setIndex((this.currentIndex + 1) % this.numOfSliders);
    }, 3000);
  }
}
