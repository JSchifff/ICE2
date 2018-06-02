import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Params } from '@angular/router';

import { DataService } from '../data.service';

import { Team } from '../classes/team';

import { Standing } from '../classes/standing';

import { Fixture } from '../classes/fixture';

import { Player } from '../classes/player';

@Component({
  selector: 'app-team-view',
  templateUrl: './team-view.component.html',
  styleUrls: ['./team-view.component.css']
})
export class TeamViewComponent implements OnInit {

  standing: Standing;
  selectedTeam: Team;

  constructor(
    private route: ActivatedRoute,
    private dataService: DataService
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.getTeam(); // reset and set based on new parameter this time
    });
    this.getStandings();

  }

  getTeam(): void {
    const id = this.route.snapshot.paramMap.get('id');
    //console.log(id);
    this.dataService.getTeam(id).subscribe(temp => this.selectedTeam = temp);
  }

  getStandings(): void {
    this.dataService.getStandings().subscribe(temp => temp.forEach(a => 
    {
      let b = <Standing>a;
      if(b.teamId==this.selectedTeam.id)
      {
        this.standing = b;
      }
    }));
  }
}
