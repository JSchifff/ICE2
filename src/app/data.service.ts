import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import "rxjs/add/operator/map";

import { Team } from './classes/team';
import { Standing } from './classes/standing';
import { Fixture } from './classes/fixture';
import { Player } from './classes/player';
import { Competition } from './classes/competition';

@Injectable()
export class DataService {

  //private teamsURL = 'https://api.football-data.org/v1/competitions/445/teams';
  private compID = '445';
  // private header = new HttpHeaders()
  // .set('X-Auth-Token', 'baf9a6c1b5344906b70b585cfca9b22d')
  // .set('X-Response-Control', 'minified');

  constructor(private http: HttpClient) { }

  getTeams(): Observable<any[]> {
    return this.http.get
    (
      'https://api.football-data.org/v1/competitions/'+ this.compID +'/teams',
      {
        headers: new HttpHeaders()
        .set('X-Auth-Token', 'baf9a6c1b5344906b70b585cfca9b22d')
        .set('X-Response-Control', 'minified')
      }
      // this.header
    )
    .map(obj => obj['teams']);
  }

  getStandings(): Observable<any[]> {
    return this.http.get
    (
      'https://api.football-data.org/v1/competitions/' + this.compID + '/leagueTable',
      {
        headers: new HttpHeaders()
        .set('X-Auth-Token', 'baf9a6c1b5344906b70b585cfca9b22d')
        .set('X-Response-Control', 'minified')
      }
    )
    .map(obj => obj['standing']);
  }

  getSeasonGames(): Observable<any[]> {
    return this.http.get
    (
      'https://api.football-data.org/v1/competitions/' + this.compID + '/fixtures?timeFrame=p365',
      {
        headers: new HttpHeaders()
        .set('X-Auth-Token', 'baf9a6c1b5344906b70b585cfca9b22d')
        .set('X-Response-Control', 'minified')
      }
    )
    .map(obj => obj['fixtures']);
  }

  getAllGames(): Observable<any[]> {
    return this.http.get
    (
      'https://api.football-data.org/v1/competitions/' + this.compID + '/fixtures?timeFrame=p999',
      {
        headers: new HttpHeaders()
        .set('X-Auth-Token', 'baf9a6c1b5344906b70b585cfca9b22d')
        .set('X-Response-Control', 'minified')
      }
    )
    .map(obj => obj['fixtures']);

  }

  getFutureGames(): Observable<any[]> {
    return this.http.get
    (
      'https://api.football-data.org/v1/competitions/' + this.compID + '/fixtures?timeFrame=n365',
      {
        headers: new HttpHeaders()
        .set('X-Auth-Token', 'baf9a6c1b5344906b70b585cfca9b22d')
        .set('X-Response-Control', 'minified')
      }
    )
    .map(obj => obj['fixtures']);
    //.forEach(obj => console.log(obj));
  }

  getTeam(id: string): Observable<any> {
    return this.http.get(
      'https://api.football-data.org/v1/teams/' + id,
      {
        headers: new HttpHeaders()
        .set('X-Auth-Token', 'baf9a6c1b5344906b70b585cfca9b22d')
      }
    );
  }

  getHead2Head(id: number): Observable<any> {
    return this.http.get(
      'https://api.football-data.org/v1/fixtures/' + id,
      {
        headers: new HttpHeaders()
        .set('X-Auth-Token', 'baf9a6c1b5344906b70b585cfca9b22d')
        .set('X-Response-Control', 'minified')
      }
    );
  }

  getPlayers(id: string): Observable<any> {
    return this.http.get(
      'https://api.football-data.org/v1/teams/' + id + '/players',
      {
        headers: new HttpHeaders()
        .set('X-Auth-Token', 'baf9a6c1b5344906b70b585cfca9b22d')
        .set('X-Response-Control', 'minified')
      }
    ).map(obj => obj['players']);
    }

  getCompetition(): Observable<any>{
  return this.http.get(
    'https://api.football-data.org/v1/competitions',
    {
      headers: new HttpHeaders()
        .set('X-Auth-Token', 'baf9a6c1b5344906b70b585cfca9b22d')
        .set('X-Response-Control', 'minified')
      }
    )};
}
