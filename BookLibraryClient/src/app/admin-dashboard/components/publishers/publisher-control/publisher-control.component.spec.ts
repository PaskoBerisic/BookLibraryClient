import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublisherControlComponent } from './publisher-control.component';

describe('PublisherControlComponent', () => {
  let component: PublisherControlComponent;
  let fixture: ComponentFixture<PublisherControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublisherControlComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PublisherControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
