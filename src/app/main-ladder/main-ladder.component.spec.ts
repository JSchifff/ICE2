import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainLadderComponent } from './main-ladder.component';

describe('MainLadderComponent', () => {
  let component: MainLadderComponent;
  let fixture: ComponentFixture<MainLadderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainLadderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainLadderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
