import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgrxFormtoComponent } from './ngrx-formto.component';

describe('NgrxFormtoComponent', () => {
  let component: NgrxFormtoComponent;
  let fixture: ComponentFixture<NgrxFormtoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgrxFormtoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgrxFormtoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
