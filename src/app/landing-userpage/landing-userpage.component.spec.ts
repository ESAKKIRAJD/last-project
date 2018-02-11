import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingUserpageComponent } from './landing-userpage.component';

describe('LandingUserpageComponent', () => {
  let component: LandingUserpageComponent;
  let fixture: ComponentFixture<LandingUserpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LandingUserpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingUserpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
