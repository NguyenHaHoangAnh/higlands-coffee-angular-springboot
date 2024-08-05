import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeaManagementComponent } from './tea-management.component';

describe('TeaManagementComponent', () => {
  let component: TeaManagementComponent;
  let fixture: ComponentFixture<TeaManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TeaManagementComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeaManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
