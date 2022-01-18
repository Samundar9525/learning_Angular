import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtoncheckComponent } from './buttoncheck.component';

describe('ButtoncheckComponent', () => {
  let component: ButtoncheckComponent;
  let fixture: ComponentFixture<ButtoncheckComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtoncheckComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtoncheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
