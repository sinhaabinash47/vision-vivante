import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoododeringComponent } from './foododering.component';

describe('FoododeringComponent', () => {
  let component: FoododeringComponent;
  let fixture: ComponentFixture<FoododeringComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FoododeringComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FoododeringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
