import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Params } from '@angular/router';

import { DataService } from '../data.service';

import { Team } from '../classes/team';

@Component({
  selector: 'app-team-view',
  templateUrl: './team-view.component.html',
  styleUrls: ['./team-view.component.css']
})
export class TeamViewComponent implements OnInit {

  selectedTeam: Team;

  constructor(
    private route: ActivatedRoute,
    private dataService: DataService
  ) {}

  ngOnInit() {
    //this.getTeam();
    this.route.params.subscribe(params => {
      //this.param = params['id'];
      this.getTeam(); // reset and set based on new parameter this time
    });
  }
  getTeam(): void {
    const id = this.route.snapshot.paramMap.get('id');
    //console.log(id);
    this.dataService.getTeam(id).subscribe(temp => this.selectedTeam = temp);
  }

}
