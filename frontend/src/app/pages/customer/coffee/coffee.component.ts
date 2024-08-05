import { CommonModule, registerLocaleData } from '@angular/common';
import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA, ViewChild, ElementRef } from '@angular/core';
import localeVI from '@angular/common/locales/vi';
registerLocaleData(localeVI);
import { config } from '../../../config/config';
import { ButtonComponent } from '../../../components/button/button.component';
import { SwiperContainer } from 'swiper/element';
import { ProductInfo } from '../../../utils/productInfo';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

import { CoffeeService } from '../../../services/coffee.service';

@Component({
  selector: 'app-coffee',
  standalone: true,
  imports: [CommonModule, ButtonComponent, FontAwesomeModule],
  templateUrl: './coffee.component.html',
  styleUrl: './coffee.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CoffeeComponent implements OnInit {
  config: any = config;
  data?: any[];
  
  // Swiper ref
  @ViewChild('swiper') swiper!: ElementRef<SwiperContainer>;

  // Icon
  faChevronLeft = faChevronLeft;
  faChevronRight = faChevronRight;

  constructor(private coffeeService: CoffeeService, public productInfo: ProductInfo) {}
  
  ngOnInit() {
    this.fetchApi();
  }

  fetchApi(): any {
    this.coffeeService
      .getAllItems()
      .subscribe((data: any) => {
        if (data) {
          this.data = data.data;
          console.log('[data]', this.data);
        } else {
          console.log('[data] no data');
        }
      });
  }

  onIncrease(): void {
    if (this.swiper && this.swiper.nativeElement.swiper) {
      this.swiper.nativeElement.swiper.slideNext();
    }
  }

  onDecrease(): void {
    if (this.swiper && this.swiper.nativeElement.swiper) {
      this.swiper.nativeElement.swiper.slidePrev();
    }
  }
}
