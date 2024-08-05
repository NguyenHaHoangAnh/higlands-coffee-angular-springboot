import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrinksFormComponent } from './drinks-form.component';

describe('DrinksFormComponent', () => {
  let component: DrinksFormComponent;
  let fixture: ComponentFixture<DrinksFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DrinksFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DrinksFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
