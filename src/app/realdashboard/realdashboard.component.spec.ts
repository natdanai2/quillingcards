import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RealdashboardComponent } from './realdashboard.component';

describe('RealdashboardComponent', () => {
  let component: RealdashboardComponent;
  let fixture: ComponentFixture<RealdashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RealdashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RealdashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
