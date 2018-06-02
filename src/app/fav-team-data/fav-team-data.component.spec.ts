import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FavTeamDataComponent } from './fav-team-data.component';

describe('FavTeamDataComponent', () => {
  let component: FavTeamDataComponent;
  let fixture: ComponentFixture<FavTeamDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FavTeamDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FavTeamDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
