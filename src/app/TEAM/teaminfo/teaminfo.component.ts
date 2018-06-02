import { Component, OnInit, Input } from '@angular/core';

import { ActivatedRoute, Params } from '@angular/router';

import { DataService } from '../../data.service';

import { Team } from '../../classes/team';

import { Standing } from '../../classes/standing';

import { Fixture } from '../../classes/fixture';

@Component({
  selector: 'app-teaminfo',
  templateUrl: './teaminfo.component.html',
  styleUrls: ['./teaminfo.component.css']
})
export class TeaminfoComponent implements OnInit {

  id: any;
  tTeam: Team;
  games: Fixture[];
  teamWins: number;
  teamLosses: number;
  teamDraws: number;
  averageGoalsFor: number;
  averageGoalsAgainst: number;
  winPercent: number;
  totalGoalsFor: number;
  totalGoalsAgainst: number;
  totalGamesPlayed: number;

 constructor(private dataService: DataService, private route: ActivatedRoute) { }


  ngOnInit() {

    this.teamWins = 0;
    this.teamLosses =0;
    this.teamDraws=0;
    this.winPercent=0;
    this.totalGoalsFor=0;
    this.totalGoalsAgainst=0;
    this.totalGamesPlayed=0;
    this.averageGoalsFor=0;
    this.averageGoalsAgainst=0;


    this.route.parent.params.subscribe(a=>this.id = a.id);
    this.dataService.getTeam(this.id).subscribe(temp => this.tTeam = temp);
    this.games = new Array();
    this.getRecentGames();
    this.getTeamValues();

    this.averageGoalsFor=this.totalGoalsFor/this.totalGamesPlayed;
    this.averageGoalsAgainst=this.totalGoalsAgainst/this.totalGamesPlayed;
    console.log(this.averageGoalsFor);
  }

  getRecentGames(): void
  {
    this.dataService.getSeasonGames().subscribe(temp => temp.forEach(a =>
        {
          let b = <Fixture>a;
          b.goalDiff = b.result.goalsHomeTeam - b.result.goalsAwayTeam;
          if(this.tTeam.name== b.homeTeamName || this.tTeam.name == b.awayTeamName)
          this.games.unshift(b);
        }));
  }

  getTeamValues(): void
  {
    this.dataService.getSeasonGames().subscribe(temp => temp.forEach(a=>
    {
      let b = <Fixture>a;
      if(b.homeTeamName==this.tTeam.name)
      {
        if(b.result.goalsHomeTeam-b.result.goalsAwayTeam<0)
        {
          this.teamLosses++;
        }
        else if(b.result.goalsHomeTeam-b.result.goalsAwayTeam==0)
        {
        this.teamDraws++;
        }
        else 
        {
          this.teamWins++;
        }
        this.totalGoalsFor+=b.result.goalsHomeTeam;
        this.totalGoalsAgainst +=b.result.goalsAwayTeam;
        this.totalGamesPlayed++;
      }
      if(b.awayTeamName==this.tTeam.name)
      {
      if(b.result.goalsHomeTeam-b.result.goalsAwayTeam<0)
        {
          this.teamWins++;
        }
        else if(b.result.goalsHomeTeam-b.result.goalsAwayTeam==0)
        {
        this.teamDraws++;
        }
        else 
        {
          this.teamLosses++;
        }
        this.totalGoalsFor+=b.result.goalsAwayTeam;
        this.totalGoalsAgainst +=b.result.goalsHomeTeam;
        this.totalGamesPlayed++;
      }
    }))
  }

}
