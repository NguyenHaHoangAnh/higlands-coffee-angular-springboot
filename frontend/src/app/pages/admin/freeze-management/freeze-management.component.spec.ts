import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreezeManagementComponent } from './freeze-management.component';

describe('FreezeManagementComponent', () => {
  let component: FreezeManagementComponent;
  let fixture: ComponentFixture<FreezeManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FreezeManagementComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FreezeManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
