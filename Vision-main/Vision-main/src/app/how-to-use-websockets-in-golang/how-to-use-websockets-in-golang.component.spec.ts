import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HowToUseWebsocketsInGolangComponent } from './how-to-use-websockets-in-golang.component';

describe('HowToUseWebsocketsInGolangComponent', () => {
  let component: HowToUseWebsocketsInGolangComponent;
  let fixture: ComponentFixture<HowToUseWebsocketsInGolangComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HowToUseWebsocketsInGolangComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HowToUseWebsocketsInGolangComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
