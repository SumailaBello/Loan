import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoicalculatorComponent } from './roicalculator.component';

describe('RoicalculatorComponent', () => {
  let component: RoicalculatorComponent;
  let fixture: ComponentFixture<RoicalculatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoicalculatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoicalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
