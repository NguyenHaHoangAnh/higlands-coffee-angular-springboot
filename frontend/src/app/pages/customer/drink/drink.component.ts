import { Component } from '@angular/core';
import { CommonModule, Location, registerLocaleData } from '@angular/common';
import { ButtonComponent } from "../../../components/button/button.component";
import localeVI from '@angular/common/locales/vi';
registerLocaleData(localeVI);

enum SIZE {Small = 'Small', Medium = 'Medium', Large = 'Large'};

@Component({
  selector: 'app-drink',
  standalone: true,
  imports: [CommonModule, ButtonComponent],
  templateUrl: './drink.component.html',
  styleUrl: './drink.component.css'
})
export class DrinkComponent {
  data!: any;
  Size: any = SIZE;
  currentSize: string = SIZE.Small;

  constructor(private location: Location) {}

  ngOnInit(): void {
    this.data = this.location.getState();
  }

  getPrice(): string {
    return this.data[this.Size[this.currentSize].toLowerCase()].price;
  }

  setSize(size: string): void {
    this.currentSize = size;
  }
}
