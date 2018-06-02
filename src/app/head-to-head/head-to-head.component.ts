import { Component, OnInit, Input } from '@angular/core';

import { Team } from '../classes/team';
import { Fixture } from '../classes/fixture';
import { Standing } from '../classes/standing';

import { DataService } from '../data.service';

@Component({
  selector: 'app-head-to-head',
  templateUrl: './head-to-head.component.html',
  styleUrls: ['./head-to-head.component.css']
})
export class HeadToHeadComponent implements OnInit {

  teams: Team[];

  selectedTeam1: Team;
  selectedTeam2: Team;

  team1Standing: Standing;
  team2Standing: Standing;

  games: Fixture[];

  data: Object;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.getTeams();
  }

  getTeams(): void {
    this.dataService.getTeams().subscribe(temp => this.teams = temp);
  }

  onTeamUpdate(): void
  {
      if(this.selectedTeam1 && this.selectedTeam2)
      {
        this.data = null;
        this.dataService.getSeasonGames()
          .subscribe(temp => temp.forEach(a =>
            {
              let b = <Fixture>a;
              if((b.homeTeamId == this.selectedTeam1.id && b.awayTeamId == this.selectedTeam2.id)
                  ||
                  (b.homeTeamId == this.selectedTeam2.id && b.awayTeamId == this.selectedTeam2.id))

                  {
                    this.getHead2HeadData(b.id);
                    this.getStandDetails(this.selectedTeam1.id, this.selectedTeam2.id)
                    return;
                  }

            }));

      }
  }

  getHead2HeadData(id: number): void
  {
    this.dataService.getHead2Head(id)
      .subscribe(temp => {
        this.data = temp;
        console.log(this.data);
        this.games = new Array();
        temp.head2head.fixtures.forEach(a =>
          {
            let b = <Fixture>a;
            b.goalDiff = b.result.goalsHomeTeam - b.result.goalsAwayTeam;
            this.games.push(b);
          });
        //this.games = temp.head2head.fixtures;
        console.log(this.games);
      });
  }

  getStandDetails(id1: number, id2: number)
  {
    this.dataService.getStandings().subscribe(temp => temp.forEach(stand =>
    {
      let a = <Standing>stand;

      if(a.teamId == id1)
      {
        this.team1Standing = a;
      }
      else if(a.teamId == id2)
      {
        this.team2Standing = a;
      }
    }));
  }

}
