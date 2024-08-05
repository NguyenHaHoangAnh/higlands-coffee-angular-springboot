import { Component, DoCheck, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup, FormsModule, NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormItemComponent } from "../form-item/form-item.component";
import { FormLabelComponent } from "../form-label/form-label.component";
import { FormControlComponent } from "../form-control/form-control.component";
import { ButtonComponent } from "../button/button.component";

@Component({
  selector: 'app-drinks-form',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule, FormItemComponent, FormLabelComponent, FormControlComponent, ButtonComponent],
  templateUrl: './drinks-form.component.html',
  styleUrl: './drinks-form.component.css'
})
export class DrinksFormComponent implements OnChanges, DoCheck {
  @Input() data?: any;
  @Input() service?: any;
  @Output() onClose = new EventEmitter<any>();
  @Output() onUpdate = new EventEmitter<any>();

  handleClose(): void {
    this.onClose.emit();
  }

  form: FormGroup<{
    name: FormControl<string>;
    image: FormControl<string>;
    description: FormControl<string>;
    price_s: FormControl<string>;
    price_m: FormControl<string>;
    price_l: FormControl<string>;
  }>;
  imagePreview?: string = '';

  constructor(private fb: NonNullableFormBuilder) {
    this.form = this.fb.group({
      name: ['', [Validators.required]],
      image: ['', [Validators.required]],
      description: ['', [Validators.required]],
      price_s: ['', [Validators.required]],
      price_m: ['', [Validators.required]],
      price_l: ['', [Validators.required]]
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['data'] && changes['data'].currentValue) {
      const newData = changes['data'].currentValue;
      this.form.patchValue({
        name: newData.name,
        image: newData.image,
        description: newData.description,
        price_s: newData.small?.price || '',
        price_m: newData.medium?.price || '',
        price_l: newData.large?.price || ''
      });
    }
  }

  onSubmit(): void {
    // console.log('[data]', this.data);
    if (this.form.valid) {
      if (this.data) {
        // Update
        this.service
          .updateItem(
            this.data.id, 
            this.form.value.name,
            this.form.value.image,
            this.form.value.description,
            Number(this.form.value.price_s),
            Number(this.form.value.price_m),
            Number(this.form.value.price_l)
          )
          .subscribe((data: any) => {
              this.onUpdate.emit(data);
          });
      } else {
        // Create
        this.service
          .createItem(
            this.form.value.name,
            this.form.value.image,
            this.form.value.description,
            Number(this.form.value.price_s),
            Number(this.form.value.price_m),
            Number(this.form.value.price_l)
          )
          .subscribe((data: any) => {
            this.onUpdate.emit(data);
          });
      }
      this.onReset();
      this.handleClose();
    } else {
      Object.values(this.form.controls).forEach(control => {
        control.markAsDirty();
        control.updateValueAndValidity({ onlySelf: true });
      });
    }
  }

  onReset(): void {
    this.form.reset();
  } 

  ngDoCheck() {
    if (this.imagePreview !== this.form.value.image) {
      this.imagePreview = this.form.value.image;
    }
  }
}
