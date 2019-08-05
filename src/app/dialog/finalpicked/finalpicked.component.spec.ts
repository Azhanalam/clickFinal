import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinalpickedComponent } from './finalpicked.component';

describe('FinalpickedComponent', () => {
  let component: FinalpickedComponent;
  let fixture: ComponentFixture<FinalpickedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinalpickedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinalpickedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
