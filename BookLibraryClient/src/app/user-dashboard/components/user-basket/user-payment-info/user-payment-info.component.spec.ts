import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserPaymentInfoComponent } from './user-payment-info.component';

describe('UserPaymentInfoComponent', () => {
  let component: UserPaymentInfoComponent;
  let fixture: ComponentFixture<UserPaymentInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserPaymentInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserPaymentInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
