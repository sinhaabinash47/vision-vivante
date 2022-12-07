import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolutiontoggleComponent } from './solutiontoggle.component';

describe('SolutiontoggleComponent', () => {
  let component: SolutiontoggleComponent;
  let fixture: ComponentFixture<SolutiontoggleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SolutiontoggleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SolutiontoggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
