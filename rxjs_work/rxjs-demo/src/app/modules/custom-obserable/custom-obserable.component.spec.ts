import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomObserableComponent } from './custom-obserable.component';

describe('CustomObserableComponent', () => {
  let component: CustomObserableComponent;
  let fixture: ComponentFixture<CustomObserableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomObserableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomObserableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
