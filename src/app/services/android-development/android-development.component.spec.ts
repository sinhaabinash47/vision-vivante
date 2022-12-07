import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AndroidDevelopmentComponent } from './android-development.component';

describe('AndroidDevelopmentComponent', () => {
  let component: AndroidDevelopmentComponent;
  let fixture: ComponentFixture<AndroidDevelopmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AndroidDevelopmentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AndroidDevelopmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
