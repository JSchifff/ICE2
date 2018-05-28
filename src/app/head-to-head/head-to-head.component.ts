import { Component, OnInit, Input } from '@angular/core';
import { Team } from '../classes/team';
import { Fixture } from '../classes/fixture';
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
        this.dataService.getSeasonGames()
          .subscribe(temp => temp.forEach(a =>
            {
              let b = <Fixture>a;
              console.log(b);
              if((b.homeTeamId == this.selectedTeam1.id && b.awayTeamId == this.selectedTeam2.id)
                  ||
                  (b.homeTeamId == this.selectedTeam2.id && b.awayTeamId == this.selectedTeam2.id))

                  {
                    this.getHead2HeadData(b.id);
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
      });
  }

}
