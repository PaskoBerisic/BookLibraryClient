import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserBasketOrderCompleteComponent } from './user-basket-order-complete.component';

describe('UserBasketOrderCompleteComponent', () => {
  let component: UserBasketOrderCompleteComponent;
  let fixture: ComponentFixture<UserBasketOrderCompleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserBasketOrderCompleteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserBasketOrderCompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
