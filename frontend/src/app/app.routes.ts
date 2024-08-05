import { config } from './config/config';
import { Routes } from '@angular/router';
// Customer
import { DefaultLayoutComponent } from './layouts/default-layout/default-layout.component';
import { HomeComponent } from './pages/customer/home/home.component';
import { ProductsComponent } from './pages/customer/products/products.component';
import { FreezeComponent } from './pages/customer/freeze/freeze.component';
import { CoffeeComponent } from './pages/customer/coffee/coffee.component';
import { TeaComponent } from './pages/customer/tea/tea.component';
import { DrinkComponent } from './pages/customer/drink/drink.component';
// Null
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
// Admin
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { ReactiveFormPageComponent } from './pages/admin/reactive-form-page/reactive-form-page.component';
import { TemplateDrivenFormPageComponent } from './pages/admin/template-driven-form-page/template-driven-form-page.component';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { FreezeManagementComponent } from './pages/admin/freeze-management/freeze-management.component';
import { CoffeeManagementComponent } from './pages/admin/coffee-management/coffee-management.component';
import { TeaManagementComponent } from './pages/admin/tea-management/tea-management.component';
import { AuthGuard } from './auth/auth.guard';

export const routes: Routes = [
    // Customer
    {
        path: '', 
        component: DefaultLayoutComponent, 
        children: [
            { path: config.routes.home, component: HomeComponent },
            { path: config.routes.products, component: ProductsComponent },
            { path: config.routes.freeze, component: FreezeComponent },
            { path: config.routes.coffee, component: CoffeeComponent },
            { path: config.routes.tea, component: TeaComponent },
        ]
    },
    // Null
    {
        path: '',
        component: AuthLayoutComponent,
        children: [
            { path: config.routes.login, component: ReactiveFormPageComponent },
            // { path: 'template-driven-form', component: TemplateDrivenFormPageComponent }
        ]
    },
    // Admin
    {
        path: '',
        component: AdminLayoutComponent,
        children: [
            { path: config.routes.dashboard, component: DashboardComponent, canActivate: [AuthGuard] },
            { path: config.routes.freeze_management, component: FreezeManagementComponent, canActivate: [AuthGuard] },
            { path: config.routes.coffee_management, component: CoffeeManagementComponent, canActivate: [AuthGuard] },
            { path: config.routes.tea_management, component: TeaManagementComponent, canActivate: [AuthGuard] },
        ]
    },
    // Customer
    {
        path: '', 
        component: DefaultLayoutComponent, 
        children: [
            { path: config.routes.drink, component: DrinkComponent },
        ]
    }
];
