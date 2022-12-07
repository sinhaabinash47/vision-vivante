import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientWorkViewComponent } from './client-work-view.component';

describe('ClientWorkViewComponent', () => {
  let component: ClientWorkViewComponent;
  let fixture: ComponentFixture<ClientWorkViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientWorkViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientWorkViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
