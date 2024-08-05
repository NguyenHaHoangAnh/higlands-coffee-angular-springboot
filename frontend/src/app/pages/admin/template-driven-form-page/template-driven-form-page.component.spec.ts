import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateDrivenFormPageComponent } from './template-driven-form-page.component';

describe('TemplateDrivenFormPageComponent', () => {
  let component: TemplateDrivenFormPageComponent;
  let fixture: ComponentFixture<TemplateDrivenFormPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TemplateDrivenFormPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TemplateDrivenFormPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
