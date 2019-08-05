import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllitemspickedComponent } from './allitemspicked.component';

describe('AllitemspickedComponent', () => {
  let component: AllitemspickedComponent;
  let fixture: ComponentFixture<AllitemspickedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllitemspickedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllitemspickedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
