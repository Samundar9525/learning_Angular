import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormtoComponent } from './formto.component';

describe('FormtoComponent', () => {
  let component: FormtoComponent;
  let fixture: ComponentFixture<FormtoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormtoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormtoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
