import { Component, OnInit } from '@angular/core';

import { DataService } from './../data.service';

import { Fixture } from '../classes/fixture';

@Component({
  selector: 'app-recent-games',
  templateUrl: './recent-games.component.html',
  styleUrls: ['./recent-games.component.css']
})
export class RecentGamesComponent implements OnInit {
  games: Fixture[];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.games = new Array();
    this.getRecentGames();
  }

  getRecentGames(): void
  {
    this.dataService.getSeasonGames()
      .subscribe(temp => temp.forEach(a =>
        {
          let b = <Fixture>a;
          b.goalDiff = b.result.goalsHomeTeam - b.result.goalsAwayTeam;
          this.games.unshift(b);
        }));//this.games = temp
      //.forEach(obj => console.log(obj));
  }


}
