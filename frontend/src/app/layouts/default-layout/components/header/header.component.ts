import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { config } from '../../../../config/config';
import { ButtonComponent } from '../../../../components/button/button.component';
import { UserService } from '../../../../services/user.service';
import { Subscription } from 'rxjs';
import { Router, RouterModule } from '@angular/router';
import { images } from '../../../../../assets/images';
import { ImageComponent } from "../../../../components/image/image.component";
import { MenuComponent } from "../../../../components/menu/menu.component";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, ButtonComponent, RouterModule, ImageComponent, MenuComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent implements OnInit, OnDestroy {
  config: any = config;
  images: any = images;
  // Get user
  user!: any;
  subscription!: Subscription;

  constructor(private userService: UserService, private router: Router) {}
  
  // Nav
  navList = [
    { name: 'Quán cà phê' },
    { name: 'Thực đơn', to: config.routes.products, children: [
      { name: 'Cà phê', to: config.routes.coffee, children: [
        { name: 'Cà phê phin', to: config.routes.products },
        { name: 'PhinDi', to: config.routes.products },
        { name: 'Cà phê espresso', to: config.routes.products }
      ] },
      { name: 'Freeze', to: config.routes.freeze, children: [
        { name: 'Freeze cà phê phin', to: config.routes.products },
        { name: 'Freeze không cà phê', to: config.routes.products },
      ] },
      { name: 'Trà', to: config.routes.tea, children: [
        { name: 'Trà sen vàng', to: config.routes.products },
        { name: 'Trà thạch đào', to: config.routes.products },
        { name: 'Trà thanh đào', to: config.routes.products },
        { name: 'Trà thạch vải', to: config.routes.products },
        { name: 'Trà nhiệt đới', to: config.routes.products },
      ] },
      { name: 'Khác', to: config.routes.products, children: [
        { name: 'Bánh ngọt', to: config.routes.products },
        { name: 'Merchandise', to: config.routes.products },
        { name: 'Cà phê đóng gói', to: config.routes.products },
        { name: 'Thực đơn giao hàng', to: config.routes.products },
      ] },
    ] },
    { name: 'Tin tức' },
    { name: 'Về chúng tôi' }
  ];
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
