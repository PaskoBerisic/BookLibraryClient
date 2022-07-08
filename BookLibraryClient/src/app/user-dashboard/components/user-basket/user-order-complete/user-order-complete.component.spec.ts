import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserOrderCompleteComponent } from './user-order-complete.component';

describe('UserOrderCompleteComponent', () => {
  let component: UserOrderCompleteComponent;
  let fixture: ComponentFixture<UserOrderCompleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserOrderCompleteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserOrderCompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
