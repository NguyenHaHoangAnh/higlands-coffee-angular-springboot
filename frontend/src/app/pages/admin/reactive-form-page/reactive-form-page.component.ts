import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormComponent } from '../../../components/reactive-form/reactive-form.component';
import { images } from '../../../../assets/images';

@Component({
  selector: 'app-reactive-form-page',
  standalone: true,
  imports: [ReactiveFormComponent, CommonModule],
  templateUrl: './reactive-form-page.component.html',
  styleUrl: './reactive-form-page.component.css'
})
export class ReactiveFormPageComponent {
  items: any[] = [];
  images: any = images;

  addItem(item: any): void {
    this.items.push(item);
  }
}
