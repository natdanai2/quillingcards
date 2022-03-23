import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BankManageComponent } from './bank-manage.component';

describe('BankManageComponent', () => {
  let component: BankManageComponent;
  let fixture: ComponentFixture<BankManageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BankManageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BankManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
