import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolutionsanamikaComponent } from './solutionsanamika.component';

describe('SolutionsanamikaComponent', () => {
  let component: SolutionsanamikaComponent;
  let fixture: ComponentFixture<SolutionsanamikaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SolutionsanamikaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SolutionsanamikaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
