import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientWorksComponent } from './client-works.component';

describe('ClientWorksComponent', () => {
  let component: ClientWorksComponent;
  let fixture: ComponentFixture<ClientWorksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientWorksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientWorksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
