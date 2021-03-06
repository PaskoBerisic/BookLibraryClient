import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookControlComponent } from './book-control.component';

describe('BookControlComponent', () => {
  let component: BookControlComponent;
  let fixture: ComponentFixture<BookControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookControlComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
