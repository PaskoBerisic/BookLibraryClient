import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LastRentalsComponent } from './last-rentals.component';

describe('LastRentalsComponent', () => {
  let component: LastRentalsComponent;
  let fixture: ComponentFixture<LastRentalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LastRentalsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LastRentalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
