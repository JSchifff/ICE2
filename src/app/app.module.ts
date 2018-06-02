import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';



import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from './/app-routing.module';
import { MainLadderComponent } from './main-ladder/main-ladder.component';
import { RecentGamesComponent } from './recent-games/recent-games.component';
import { NotFoundComponent } from './not-found/not-found.component';

import { DataService } from './data.service';
import { TeamViewComponent } from './team-view/team-view.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SmallLadderComponent } from './small-ladder/small-ladder.component';
import { LeagueInfoComponent } from './league-info/league-info.component';
import { HeadToHeadComponent } from './head-to-head/head-to-head.component';
import { TeaminfoComponent } from './TEAM/teaminfo/teaminfo.component';
import { PlayerinfoComponent } from './TEAM/playerinfo/playerinfo.component';
import { PastGamesComponent } from './TEAM/past-games/past-games.component';
import { FutureGamesComponent } from './TEAM/future-games/future-games.component';
import { MiniNavComponent } from './mini-nav/mini-nav.component';
import { FavTeamDataComponent } from './fav-team-data/fav-team-data.component';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainLadderComponent,
    RecentGamesComponent,
    NotFoundComponent,
    TeamViewComponent,
    SidebarComponent,
    SmallLadderComponent,
    LeagueInfoComponent,
    HeadToHeadComponent,
    TeaminfoComponent,
    PlayerinfoComponent,
    PastGamesComponent,
    FutureGamesComponent,
    MiniNavComponent,
    FavTeamDataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    DataService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
