import { Component } from '@angular/core';
import { images } from '../../../../assets/images';
import { ButtonComponent } from '../../../components/button/button.component';
import { config } from '../../../config/config';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  images: any = images;
  config: any = config;
}
