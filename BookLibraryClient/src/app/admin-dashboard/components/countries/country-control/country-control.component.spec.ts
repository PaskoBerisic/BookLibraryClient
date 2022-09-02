import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryControlComponent } from './country-control.component';

describe('CountryControlComponent', () => {
  let component: CountryControlComponent;
  let fixture: ComponentFixture<CountryControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CountryControlComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CountryControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
