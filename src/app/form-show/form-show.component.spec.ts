import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormShowComponent } from './form-show.component';

describe('FormShowComponent', () => {
  let component: FormShowComponent;
  let fixture: ComponentFixture<FormShowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormShowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
