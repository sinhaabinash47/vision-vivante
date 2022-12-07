import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooddeveliryComponent } from './fooddeveliry.component';

describe('FooddeveliryComponent', () => {
  let component: FooddeveliryComponent;
  let fixture: ComponentFixture<FooddeveliryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooddeveliryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FooddeveliryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
