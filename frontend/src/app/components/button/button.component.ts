import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent {
  @Input() to?: string;
  @Input() href?: string;
  @Input() primary?: boolean = false;
  @Input() second?: boolean = false;
  @Input() text?: boolean = false;
  @Input() border?: boolean = false;
  @Input() round?: boolean = false;
  @Input() large?: boolean = false;
  @Input() medium?: boolean = false;
  @Input() state?: any;
  @Output() onClick = new EventEmitter<any>();
  
  handleClick(): void {
    this.onClick.emit();
  }
}
