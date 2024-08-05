import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faPen, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { CardComponent } from "../../../components/card/card.component";
import { TableComponent } from "../../../components/table/table.component";
import { FreezeService } from '../../../services/freeze.service';
import { ButtonComponent } from "../../../components/button/button.component";
import { ModalComponent } from "../../../components/modal/modal.component";
import { DrinksFormComponent } from "../../../components/drinks-form/drinks-form.component";
import { DeleteFormComponent } from "../../../components/delete-form/delete-form.component";

@Component({
  selector: 'app-freeze-management',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule, CardComponent, TableComponent, ButtonComponent, ModalComponent, DrinksFormComponent, DeleteFormComponent],
  templateUrl: './freeze-management.component.html',
  styleUrl: './freeze-management.component.css'
})
export class FreezeManagementComponent {
  headers: string[] = [
    'STT',
    'Ảnh',
    'Tên',
    'Ngày tạo',
    'Ngày cập nhật',
    'Hành động',
  ];
  data!: any[];
  item?: any;
  // Icons
  faPen = faPen;
  faTrashCan = faTrashCan;
  // modal
  modalState?: string = 'hide';

  constructor(private freezeService: FreezeService) {}

  ngOnInit() {
    this.fetchApi();
  }

  fetchApi(): void {
    this.freezeService
      .getAllItems()
      .subscribe((data: any) => {
        if (data) {
          this.data = data.data.reverse();
          // console.log('[freeze]', data);
        }
      });
  }

  getService(): FreezeService {
    return this.freezeService;
  }

  setItem(item: any): void {
    this.item = item;
  }

  setModalState(state: string): void {
    this.modalState = state;
  }

  handleAdd(): void {
    this.setItem(undefined);
    this.setModalState('form');
  }

  handleEdit(item: any): void {
    this.setItem(item);
    this.setModalState('form');
  }
  
  handleDelete(item: any): void {
    this.setItem(item);
    this.setModalState('delete');
  }

  handleUpdate(event: any) {
    this.fetchApi();
  }
}
