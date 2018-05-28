import { Component, OnInit } from '@angular/core';
import { Team } from '../classes/team';
import { DataService } from '../data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  myTeam: Team[];
  //Loaded: Promise<boolean>;


  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.getTeams();
  }

  getTeams(): void {
    this.dataService.getTeams().subscribe(temp => this.myTeam = temp);
  }





}
