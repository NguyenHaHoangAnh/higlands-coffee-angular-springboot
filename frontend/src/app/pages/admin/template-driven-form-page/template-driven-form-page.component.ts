import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplateDrivenFormComponent } from '../../../components/template-driven-form/template-driven-form.component';

@Component({
  selector: 'app-template-driven-form-page',
  standalone: true,
  imports: [TemplateDrivenFormComponent, CommonModule],
  templateUrl: './template-driven-form-page.component.html',
  styleUrl: './template-driven-form-page.component.css'
})
export class TemplateDrivenFormPageComponent {
  items: any[] = [];

  addItem(item: any): void {
    this.items.push(item);
  }
}
