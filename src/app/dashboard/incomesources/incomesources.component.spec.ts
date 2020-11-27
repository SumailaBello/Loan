import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IncomesourcesComponent } from './incomesources.component';

describe('IncomesourcesComponent', () => {
  let component: IncomesourcesComponent;
  let fixture: ComponentFixture<IncomesourcesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IncomesourcesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncomesourcesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
