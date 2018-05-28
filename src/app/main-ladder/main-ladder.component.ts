import { Component, OnInit } from '@angular/core';

import { DataService } from '../data.service';

import { Standing } from '../classes/standing';

@Component({
  selector: 'app-main-ladder',
  templateUrl: './main-ladder.component.html',
  styleUrls: ['./main-ladder.component.css']
})
export class MainLadderComponent implements OnInit {
  standings: Standing[];

  constructor(private dataService: DataService) {
}

  ngOnInit() {
    this.getStandings();
  }

  getStandings(): void {
    this.dataService.getStandings().subscribe(temp => this.standings = temp);
  }

}
