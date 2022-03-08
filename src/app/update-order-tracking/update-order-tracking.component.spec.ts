import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateOrderTrackingComponent } from './update-order-tracking.component';

describe('UpdateOrderTrackingComponent', () => {
  let component: UpdateOrderTrackingComponent;
  let fixture: ComponentFixture<UpdateOrderTrackingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateOrderTrackingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateOrderTrackingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
