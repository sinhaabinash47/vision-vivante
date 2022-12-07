import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ECommerceb2cComponent } from './e-commerceb2c.component';

describe('ECommerceb2cComponent', () => {
  let component: ECommerceb2cComponent;
  let fixture: ComponentFixture<ECommerceb2cComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ECommerceb2cComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ECommerceb2cComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
