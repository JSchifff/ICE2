import { Component, OnInit, Input } from '@angular/core';

import { ActivatedRoute, Params } from '@angular/router';

import { DataService } from '../../data.service';

import { Fixture } from '../../classes/fixture';

import { Team } from '../../classes/team';



@Component({
  selector: 'app-past-games',
  templateUrl: './past-games.component.html',
  styleUrls: ['./past-games.component.css']
})
export class PastGamesComponent implements OnInit {

games: Fixture[];
glength: number;
paTeam: Team;
id: string;


 constructor(private dataService: DataService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.games = new Array();
    this.route.parent.params.subscribe(a=>this.id = a.id);
    this.dataService.getTeam(this.id).subscribe(temp => this.paTeam = temp);
    this.getRecentGames();

  }

  getRecentGames(): void
  {
    this.dataService.getAllGames().subscribe(temp => temp.forEach(a =>
        {
          let b = <Fixture>a;
          b.goalDiff = b.result.goalsHomeTeam - b.result.goalsAwayTeam;
          if(this.paTeam.name== b.homeTeamName || this.paTeam.name == b.awayTeamName)
          this.games.unshift(b);
        }));
  }


}
