import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-template-driven-form',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './template-driven-form.component.html',
  styleUrl: './template-driven-form.component.css'
})
export class TemplateDrivenFormComponent {
  name: string = '';
  password: string = '';

  @Output() itemChange = new EventEmitter<any>();

  onSubmit(form: any): void {
    if (form.valid) {
      console.log('[submit]', form.value);
      this.itemChange.emit(form.value);
      this.onReset(form);
    } else {
      Object.keys(form.controls).forEach(field => {
        const control = form.controls[field];
        control.markAsDirty();
      });
    }
  }

  onReset(form: any): void {
    form.reset();
  }
}
