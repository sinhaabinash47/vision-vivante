import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EcommercemarcketplaceComponent } from './ecommercemarcketplace.component';

describe('EcommercemarcketplaceComponent', () => {
  let component: EcommercemarcketplaceComponent;
  let fixture: ComponentFixture<EcommercemarcketplaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EcommercemarcketplaceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EcommercemarcketplaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
