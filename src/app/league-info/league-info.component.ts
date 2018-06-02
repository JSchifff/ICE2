import { Component, OnInit } from '@angular/core';
import { Competition } from '../classes/competition';
import { DataService } from '../data.service';

@Component({
  selector: 'app-league-info',
  templateUrl: './league-info.component.html',
  styleUrls: ['./league-info.component.css']
})
export class LeagueInfoComponent implements OnInit {

  constructor(private dataService: DataService) { }

  competition: Competition;

  ngOnInit() {
  console.log("DFS");
  this.getCompetition();
  console.log(this.competition.id);
  }

getCompetition(): void{
	this.dataService.getCompetition().subscribe(temp => temp.forEach( a=>
	{
		let b = <Competition>a;
		if(b.id == 445)
		{
			this.competition = b;
		}
	}
	));
	}
}
