import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { SidebarModule } from '@coreui/angular';
import { config } from '../../../../config/config';
import { ButtonComponent } from "../../../../components/button/button.component";

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [SidebarModule, ButtonComponent],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SidebarComponent {
  config: any = config;
  navItems?: any[];

  constructor() {
    this.navItems = [
      {
        name: 'Trang chủ',
        url: config.routes.dashboard,
        routerLink: config.routes.dashboard,
        routerLinkActive: 'active',
        routerLinkActiveOptions: { exact: true },
        class: `mb-[2px] [&>a]:px-[12px] [&>a]:py-[9px] [&>a]:block w-full [&>a]:rounded-[4px] [&>a]:transition-all [&>a]:duration-[0.3s] [&>a]:ease-linear text-[16px] hover:[&>a]:bg-[var(--hover-color)] [&>a.active]:bg-[var(--primary-color)] [&>a.active]:text-white hover:[&>a.active]:bg-[var(--primary-color)]`
      },
      {
        name: 'Quản lý sản phẩm',
        class: 'mb-[2px] overflow-y-hidden [&>a]:px-[12px] [&>a]:py-[9px] [&>a]:block w-full [&>a]:rounded-[4px] [&>a]:transition-all [&>a]:duration-[0.3s] [&>a]:ease-linear text-[16px] hover:[&>a]:bg-[var(--hover-color)] [&:has(.child>a.active)>a]:bg-[var(--primary-color)] [&:has(.child>a.active)>a]:text-white',
        children: [
          {
            name: 'Freeze',
            url: config.routes.freeze_management,
            routerLink: config.routes.freeze_management,
            routerLinkActive: 'active',
            routerLinkActiveOptions: { exact: true },
            class: `[&>a]:relative [&>a]:pr-[12px] [&>a]:pl-[30px] [&>a]:py-[6px] [&>a]:block w-full [&>a]:rounded-[4px] [&>a]:transition-all [&>a]:duration-[0.3s] [&>a]:ease-linear text-[14px] hover:[&>a]:bg-[var(--hover-color)] [&>a.active]:before:block [&>a.active]:before:absolute [&>a.active]:before:top-1/2 [&>a.active]:before:left-[12px] [&>a.active]:before:-translate-y-1/2 [&>a.active]:before:w-[4px] [&>a.active]:before:h-[4px] [&>a.active]:before:rounded-full [&>a.active]:before:bg-[var(--primary-color)] child`
          },
          {
            name: 'Cà phê',
            url: config.routes.coffee_management,
            routerLink: config.routes.coffee_management,
            routerLinkActive: 'active',
            routerLinkActiveOptions: { exact: true },
            class: `[&>a]:relative [&>a]:pr-[12px] [&>a]:pl-[30px] [&>a]:py-[6px] [&>a]:block w-full [&>a]:rounded-[4px] [&>a]:transition-all [&>a]:duration-[0.3s] [&>a]:ease-linear text-[14px] hover:[&>a]:bg-[var(--hover-color)] [&>a.active]:before:block [&>a.active]:before:absolute [&>a.active]:before:top-1/2 [&>a.active]:before:left-[12px] [&>a.active]:before:-translate-y-1/2 [&>a.active]:before:w-[4px] [&>a.active]:before:h-[4px] [&>a.active]:before:rounded-full [&>a.active]:before:bg-[var(--primary-color)] child`
          },
          {
            name: 'Trà',
            url: config.routes.tea_management,
            routerLink: config.routes.tea_management,
            routerLinkActive: 'active',
            routerLinkActiveOptions: { exact: true },
            class: `[&>a]:relative [&>a]:pr-[12px] [&>a]:pl-[30px] [&>a]:py-[6px] [&>a]:block w-full [&>a]:rounded-[4px] [&>a]:transition-all [&>a]:duration-[0.3s] [&>a]:ease-linear text-[14px] hover:[&>a]:bg-[var(--hover-color)] [&>a.active]:before:block [&>a.active]:before:absolute [&>a.active]:before:top-1/2 [&>a.active]:before:left-[12px] [&>a.active]:before:-translate-y-1/2 [&>a.active]:before:w-[4px] [&>a.active]:before:h-[4px] [&>a.active]:before:rounded-full [&>a.active]:before:bg-[var(--primary-color)] child`
          },
        ]
      }
    ]
  }
}
