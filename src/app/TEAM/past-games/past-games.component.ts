import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Params } from '@angular/router';

import { DataService } from '../../data.service';

import { Fixture } from '../../classes/fixture';

@Component({
  selector: 'app-past-games',
  templateUrl: './past-games.component.html',
  styleUrls: ['./past-games.component.css']
})
export class PastGamesComponent implements OnInit {
games: Fixture[];
 constructor(private dataService: DataService, private route: ActivatedRoute) { }

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
