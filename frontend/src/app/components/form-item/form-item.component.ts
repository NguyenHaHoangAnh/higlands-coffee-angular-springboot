import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-form-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './form-item.component.html',
  styleUrl: './form-item.component.css'
})
export class FormItemComponent {
  @Input() inline?: boolean = false;
}
