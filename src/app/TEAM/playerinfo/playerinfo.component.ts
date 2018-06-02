import { Component, OnInit, Input } from '@angular/core';

import { ActivatedRoute, Params } from '@angular/router';

import { DataService } from '../../data.service';

import { Fixture } from '../../classes/fixture';

import { Team } from '../../classes/team';

import { Player } from '../../classes/player';

@Component({
  selector: 'app-playerinfo',
  templateUrl: './playerinfo.component.html',
  styleUrls: ['./playerinfo.component.css']
})
export class PlayerinfoComponent implements OnInit {


  id: number;
  pTeam: Team;
	players: Player[];

	constructor(private dataService: DataService, private route: ActivatedRoute) {}

  ngOnInit() {
  this.route.parent.params.subscribe(a=>this.id = a.id);
  this.dataService.getTeam(this.id+"").subscribe(temp => this.pTeam = temp);

  this.players= new Array();
  this.getPlayers();
  }

getPlayers(): void
  {
  	this.dataService.getPlayers(this.id+"").subscribe(temp =>temp.forEach(a=>
  		{
 			let b =<Player>a;
  			this.players.unshift(b);
  		}));
 	}

}
