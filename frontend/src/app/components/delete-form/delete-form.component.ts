import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ButtonComponent } from "../button/button.component";

@Component({
  selector: 'app-delete-form',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './delete-form.component.html',
  styleUrl: './delete-form.component.css'
})
export class DeleteFormComponent {
  @Input() data?: any;
  @Output() onClose = new EventEmitter<any>();
  @Input() service?: any;
  @Input() onUpdate?: void;

  handleClose(): void {
    this.onClose.emit();
  }

  handleDelete(): void {
    this.service
      .deleteItem(this.data._id)
      .subscribe(() => {
        this.onUpdate;
        this.handleClose();
      });
  }
}
