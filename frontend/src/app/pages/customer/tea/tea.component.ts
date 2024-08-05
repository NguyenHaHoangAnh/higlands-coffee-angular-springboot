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

import { TeaService } from '../../../services/tea.service';

@Component({
  selector: 'app-tea',
  standalone: true,
  imports: [CommonModule, ButtonComponent, FontAwesomeModule],
  templateUrl: './tea.component.html',
  styleUrl: './tea.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TeaComponent implements OnInit {
  config: any = config;
  data?: any[];
  
  // Swiper ref
  @ViewChild('swiper') swiper!: ElementRef<SwiperContainer>;

  // Icon
  faChevronLeft = faChevronLeft;
  faChevronRight = faChevronRight;

  constructor(private teaService: TeaService, public productInfo: ProductInfo) {}
  
  ngOnInit() {
    this.fetchApi();
  }

  fetchApi(): any {
    this.teaService
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
