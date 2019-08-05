import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Scanner3Component } from './scanner3.component';

describe('Scanner3Component', () => {
  let component: Scanner3Component;
  let fixture: ComponentFixture<Scanner3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Scanner3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Scanner3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
