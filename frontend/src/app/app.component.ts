import { Component, DoCheck, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DefaultLayoutComponent } from './layouts/default-layout/default-layout.component';
import { UserService } from './services/user.service';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DefaultLayoutComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  userId = localStorage.getItem('id');

  constructor(private userService: UserService, private authTokenService: AuthService) {}
  
  ngOnInit(): void {
    if (this.userId && this.authTokenService.isAuthenticated()) {
      this.userService
        .getUserById(this.userId)
        .subscribe((data: any) => {
          if (data?.message) {
            this.userService.setUser(data.data);
          } else if (data?.error) {
            console.log('[app]', data.error);
          }
        });
    }
  }
}
