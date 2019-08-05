import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuitsdialogComponent } from './suitsdialog.component';

describe('SuitsdialogComponent', () => {
  let component: SuitsdialogComponent;
  let fixture: ComponentFixture<SuitsdialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuitsdialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuitsdialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
