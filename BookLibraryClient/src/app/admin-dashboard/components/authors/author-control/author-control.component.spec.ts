import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorControlComponent } from './author-control.component';

describe('AuthorControlComponent', () => {
  let component: AuthorControlComponent;
  let fixture: ComponentFixture<AuthorControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthorControlComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuthorControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
