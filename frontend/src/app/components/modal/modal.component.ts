import { Component, EventEmitter, Output } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { ButtonComponent } from "../button/button.component";

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [FontAwesomeModule, ButtonComponent],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css'
})
export class ModalComponent {
  // Icons
  faXmark = faXmark;
  // Onclose
  @Output() onClose = new EventEmitter<any>();

  handleClose(): void {
    this.onClose.emit();
  }
}
