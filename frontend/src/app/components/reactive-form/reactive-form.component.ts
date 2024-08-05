import { CommonModule } from '@angular/common';
import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, FormsModule, NonNullableFormBuilder, ReactiveFormsModule, ValidatorFn, Validators } from '@angular/forms';
import { FormItemComponent } from '../form-item/form-item.component';
import { FormLabelComponent } from '../form-label/form-label.component';
import { FormControlComponent } from '../form-control/form-control.component';
import { ButtonComponent } from '../button/button.component';
import { Subscription } from 'rxjs';
import { Router, RouterModule } from '@angular/router';
import { config } from '../../config/config';

import { UserService } from '../../services/user.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-reactive-form',
  standalone: true,
  imports: [
    ReactiveFormsModule, 
    FormsModule, 
    CommonModule,
    RouterModule,
    FormItemComponent,
    FormLabelComponent,
    FormControlComponent,
    ButtonComponent,
  ],
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.css',
})
export class ReactiveFormComponent {
  // @Output() itemChange = new EventEmitter<any>();

  form: FormGroup<{
    username: FormControl<string>;
    password: FormControl<string>;
    confirmPassword: FormControl<string>;
  }>;
  config: any = config;

  constructor(private userService: UserService, private router: Router, private authService: AuthService, private fb: NonNullableFormBuilder,) {
    this.form = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
      confirmPassword: ['', [Validators.required, this.confirmPasswordValidator]],
    });
  }

  onSubmit(): void {
    if (this.form.valid) {
      console.log('[submit]', this.form.value);
      // add item
      // this.itemChange.emit(this.form.value);

      // Handle login
      if (this.form.value.username && this.form.value.password) {
        this.handleLogin(
          this.form.value.username,
          this.form.value.password
        );
      }

      // Reset form
      this.onReset();
    } else {
      Object.values(this.form.controls).forEach(control => {
        control.markAsDirty();
        control.updateValueAndValidity({ onlySelf: true });
      });
    }
  }

  // Handle login
  handleLogin(username: string, password: string): void {
    this.authService
      .login(username, password)
      .subscribe((data: any) => {
        if (data?.message) {
          console.log('[login]', data);
          // Lưu token vào cookies: 
          // - Khi gửi bất kỳ res từ client -> server: cookies tự động báo theo lên server
          // -> Server đọc được cookies
          // - Đọc cookies bên server = cookies parser (npm i cookie-parser) ở be.

          // Lưu token vào local storage
          const id = data.id;
          const token = data.token;
          localStorage.setItem('id', id);
          localStorage.setItem('token', token);

          // Set global user 
          this.userService
            .getUserById(id)
            .subscribe((data: any) => {
              this.userService.setUser(data.data);
            });

          // Navigate to home page
          setTimeout(() => {
            this.router.navigate([this.config.routes.home]);
          }, 200);
        } else if (data?.error) {
          console.log('[login]', data?.error);
        }
      })
  }

  // Reset form
  onReset(): void {
    this.form.reset();
  }

  // Custom confirm password validator
  confirmPasswordValidator: ValidatorFn = (control: AbstractControl): { [s: string]: boolean } => {
    if (!control.value) {
      return { required: true };
    } else if (control.value !== this.form.controls.password.value) {
      return { confirm: true, error: true };
    }
    return {};
  }

  updateConfirmPasswordValidator(): void {
    // wait for refresh value
    Promise.resolve().then(() => this.form.controls.confirmPassword.updateValueAndValidity());
  }
}
