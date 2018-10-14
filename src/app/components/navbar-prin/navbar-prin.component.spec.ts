import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarPrinComponent } from './navbar-prin.component';

describe('NavbarPrinComponent', () => {
  let component: NavbarPrinComponent;
  let fixture: ComponentFixture<NavbarPrinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavbarPrinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarPrinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
