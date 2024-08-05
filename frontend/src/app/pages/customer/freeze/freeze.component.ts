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

import { FreezeService } from '../../../services/freeze.service';

@Component({
  selector: 'app-freeze',
  standalone: true,
  imports: [CommonModule, ButtonComponent, FontAwesomeModule],
  templateUrl: './freeze.component.html',
  styleUrl: './freeze.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class FreezeComponent implements OnInit {
  config: any = config;
  data?: any[];
  
  // Swiper ref
  @ViewChild('swiper') swiper!: ElementRef<SwiperContainer>;

  // Icon
  faChevronLeft = faChevronLeft;
  faChevronRight = faChevronRight;

  constructor(private freezeService: FreezeService, public productInfo: ProductInfo) {}
  
  ngOnInit() {
    this.fetchApi();
  }

  fetchApi(): any {
    this.freezeService
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
