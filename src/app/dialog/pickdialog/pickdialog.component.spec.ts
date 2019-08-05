import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PickdialogComponent } from './pickdialog.component';

describe('PickdialogComponent', () => {
  let component: PickdialogComponent;
  let fixture: ComponentFixture<PickdialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PickdialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PickdialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
