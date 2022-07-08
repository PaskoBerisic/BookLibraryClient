import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopRentalsComponent } from './top-rentals.component';

describe('TopRentalsComponent', () => {
  let component: TopRentalsComponent;
  let fixture: ComponentFixture<TopRentalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopRentalsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopRentalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
