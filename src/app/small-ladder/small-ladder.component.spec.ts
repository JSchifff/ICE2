import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmallLadderComponent } from './small-ladder.component';

describe('SmallLadderComponent', () => {
  let component: SmallLadderComponent;
  let fixture: ComponentFixture<SmallLadderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmallLadderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmallLadderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
