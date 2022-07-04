import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAvailableBooksComponent } from './admin-available-books.component';

describe('AdminAvailableBooksComponent', () => {
  let component: AdminAvailableBooksComponent;
  let fixture: ComponentFixture<AdminAvailableBooksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminAvailableBooksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminAvailableBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
