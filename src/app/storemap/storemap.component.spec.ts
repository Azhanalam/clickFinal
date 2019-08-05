import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoremapComponent } from './storemap.component';

describe('StoremapComponent', () => {
  let component: StoremapComponent;
  let fixture: ComponentFixture<StoremapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoremapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoremapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
