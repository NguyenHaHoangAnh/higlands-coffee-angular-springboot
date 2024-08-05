import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ValidationErrors } from '@angular/forms';

@Component({
  selector: 'app-form-control',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './form-control.component.html',
  styleUrl: './form-control.component.css'
})
export class FormControlComponent {
  @Input() error?: boolean;
  @Input() message?: string;
}
