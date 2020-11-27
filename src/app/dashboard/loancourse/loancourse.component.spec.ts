import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoancourseComponent } from './loancourse.component';

describe('LoancourseComponent', () => {
  let component: LoancourseComponent;
  let fixture: ComponentFixture<LoancourseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoancourseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoancourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
