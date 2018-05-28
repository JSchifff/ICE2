import { Component, OnInit } from '@angular/core';

import { DataService } from '../data.service';

import { Standing } from '../classes/standing';

@Component({
  selector: 'app-small-ladder',
  templateUrl: './small-ladder.component.html',
  styleUrls: ['./small-ladder.component.css']
})
export class SmallLadderComponent implements OnInit {

  standings: Standing[];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.getStandings();
  }

  getStandings(): void {
    this.dataService.getStandings().subscribe(temp => this.standings = temp);
    console.log(this.standings);

  }

}
