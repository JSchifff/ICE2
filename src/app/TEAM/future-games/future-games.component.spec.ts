import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FutureGamesComponent } from './future-games.component';

describe('FutureGamesComponent', () => {
  let component: FutureGamesComponent;
  let fixture: ComponentFixture<FutureGamesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FutureGamesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FutureGamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
