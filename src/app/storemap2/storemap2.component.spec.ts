import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Storemap2Component } from './storemap2.component';

describe('Storemap2Component', () => {
  let component: Storemap2Component;
  let fixture: ComponentFixture<Storemap2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Storemap2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Storemap2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
