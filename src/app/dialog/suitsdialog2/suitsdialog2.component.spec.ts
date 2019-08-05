import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Suitsdialog2Component } from './suitsdialog2.component';

describe('Suitsdialog2Component', () => {
  let component: Suitsdialog2Component;
  let fixture: ComponentFixture<Suitsdialog2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Suitsdialog2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Suitsdialog2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
