import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ButtonComponent } from '../../../../components/button/button.component';
import { Router, RouterModule } from '@angular/router';
import { config } from '../../../../config/config';
import { images } from '../../../../../assets/images';
import { Subscription } from 'rxjs';
import { UserService } from '../../../../services/user.service';
import { MenuComponent } from "../../../../components/menu/menu.component";
import { ImageComponent } from "../../../../components/image/image.component";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, ButtonComponent, RouterModule, MenuComponent, ImageComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  config: any = config;
  images: any = images;
  // Get user
  user!: any;
  subscription!: Subscription;

  constructor(private userService: UserService, private router: Router) {}

  // Menu
  menu: any[] = [
    { name: 'Quản lý', to: config.routes.dashboard },
    { name: 'Đăng xuất' },
  ];

  // Handle Menu click
  handleChange(item?: any): void {
    // console.log('[menu item]', item);
    switch (item.name) {
      case 'Đăng xuất':
        localStorage.removeItem('token');
        localStorage.removeItem('id');
        this.userService.setUser(undefined);
        setTimeout(() => {
          this.router.navigate([config.routes.home]);
        }, 200);
        break;
      default:
        break;
    }
  }

  ngOnInit(): void {
    this.subscription = this.userService.user.subscribe((user: any) => this.user = user);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
