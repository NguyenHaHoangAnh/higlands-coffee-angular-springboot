import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-form-label',
  standalone: true,
  imports: [],
  templateUrl: './form-label.component.html',
  styleUrl: './form-label.component.css'
})
export class FormLabelComponent {
  @Input() for?: string;
}
