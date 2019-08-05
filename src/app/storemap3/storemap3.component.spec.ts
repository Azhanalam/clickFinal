import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Storemap3Component } from './storemap3.component';

describe('Storemap3Component', () => {
  let component: Storemap3Component;
  let fixture: ComponentFixture<Storemap3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Storemap3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Storemap3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
