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
  id: string;
  fav: boolean;

  constructor(
    private route: ActivatedRoute,
    private dataService: DataService
  ) {}

  ngOnInit() {

    this.route.params.subscribe(params => {
      this.id = null;
      this.selectedTeam = null;
      this.id = this.route.snapshot.paramMap.get('id');
      this.updateFav();
      this.getTeam(); // reset and set based on new parameter this time
      this.getStandings();
    });


  }

  getTeam(): void {

    //console.log(id);
    this.dataService.getTeam(this.id).subscribe(temp => {
      this.selectedTeam = temp;

    });
  }

  getStandings(): void {
    this.dataService.getStandings().subscribe(temp => temp.forEach(a =>
    {
      let b = <Standing>a;
      if(b.teamId == Number(this.id))
      {
        this.standing = b;
      }
    }));
  }

  setFav(): void
  {
    document.cookie = 'id=;expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    document.cookie = "id=" + this.id;
    this.updateFav();
  }

  updateFav(): void
  {
    var cookieID = document.cookie.split("=")[1];

    console.log(cookieID);
    if(cookieID == this.id)
    {
      this.fav = true;
    }
    else
    {
      console.log(cookieID + "    |   " + this.id)
      this.fav = false;
    }
  }
}
