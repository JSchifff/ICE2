import { Component, OnInit } from '@angular/core';

import { DataService } from '../data.service';

import { Fixture } from '../classes/fixture';

@Component({
  selector: 'app-fav-team-data',
  templateUrl: './fav-team-data.component.html',
  styleUrls: ['./fav-team-data.component.css']
})
export class FavTeamDataComponent implements OnInit {

  constructor(private dataService: DataService) { }

  id: string;
  game: Fixture;

  isHome: boolean;
  goalDiff: number;

  favName: string;
  otherName: string;

  favGoals: number;
  otherGoals: number;

  ngOnInit() {
    this.id = document.cookie.split("=")[1];

    if(this.id)
    {
        this.dataService.getSeasonGames()
          .subscribe(temp => temp.forEach(a =>
            {
              let b = <Fixture>a;
              if(b.homeTeamId == Number(this.id))
              {
                this.goalDiff = b.result.goalsHomeTeam - b.result.goalsAwayTeam;
                this.isHome = true;
                this.favName = b.homeTeamName;
                this.otherName = b.awayTeamName;

                this.favGoals = b.result.goalsHomeTeam;
                this.otherGoals = b.result.goalsAwayTeam;
                return;
              }
              else if(b.awayTeamId == Number(this.id))
              {
                this.goalDiff = b.result.goalsHomeTeam - b.result.goalsAwayTeam;
                this.isHome = false;
                this.otherName = b.homeTeamName;
                this.favName = b.awayTeamName;

                this.otherGoals = b.result.goalsHomeTeam;
                this.favGoals = b.result.goalsAwayTeam;
                return;
             }

            }));
    }
  }

}
