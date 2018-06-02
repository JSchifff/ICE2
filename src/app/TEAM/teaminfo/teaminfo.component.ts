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

 constructor(private dataService: DataService, private route: ActivatedRoute) { }

games: Fixture[];

  ngOnInit() {
    this.route.parent.params.subscribe(a=>this.id = a.id);
    this.dataService.getTeam(this.id).subscribe(temp => this.tTeam = temp);
    console.log("DFS");
    this.games = new Array();
    this.getRecentGames();
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


}
