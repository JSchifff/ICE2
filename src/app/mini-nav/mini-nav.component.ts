import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
@Component({
  selector: 'app-mini-nav',
  templateUrl: './mini-nav.component.html',
  styleUrls: ['./mini-nav.component.css']
})
export class MiniNavComponent implements OnInit {

  constructor(private dataService: DataService) { }

  ngOnInit() {
  }

}
