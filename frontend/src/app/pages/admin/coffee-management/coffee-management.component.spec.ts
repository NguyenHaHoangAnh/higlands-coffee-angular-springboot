import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoffeeManagementComponent } from './coffee-management.component';

describe('CoffeeManagementComponent', () => {
  let component: CoffeeManagementComponent;
  let fixture: ComponentFixture<CoffeeManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CoffeeManagementComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoffeeManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
