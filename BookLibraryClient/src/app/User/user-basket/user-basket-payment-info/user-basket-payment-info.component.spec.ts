import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserBasketPaymentInfoComponent } from './user-basket-payment-info.component';

describe('UserBasketPaymentInfoComponent', () => {
  let component: UserBasketPaymentInfoComponent;
  let fixture: ComponentFixture<UserBasketPaymentInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserBasketPaymentInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserBasketPaymentInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
