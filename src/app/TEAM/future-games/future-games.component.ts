import { Component, OnInit, Input } from '@angular/core';

import { ActivatedRoute, Params } from '@angular/router';

import { DataService } from '../../data.service';

import { Fixture } from '../../classes/fixture';

import { Team } from '../../classes/team';

@Component({
  selector: 'app-future-games',
  templateUrl: './future-games.component.html',
  styleUrls: ['./future-games.component.css']
})
export class FutureGamesComponent implements OnInit {

games: Fixture[];
gameslength: number;
teamID: number;
fTeam: Team;



  constructor(private dataService: DataService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.games = new Array();
    this.route.parent.params.subscribe(a => this.teamID = a.id);
    this.getFutureGames();
  }

getFutureGames(): void
  {
    this.dataService.getFutureGames().subscribe(temp => temp.forEach(a =>
        {
          let b = <Fixture>a;
          b.goalDiff = b.result.goalsHomeTeam - b.result.goalsAwayTeam;
          if(this.fTeam.name== b.homeTeamName || this.fTeam.name == b.awayTeamName)// future time frame goes here
          this.games.unshift(b);
        }));
  }
}
