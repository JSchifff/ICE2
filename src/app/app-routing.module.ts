import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MainLadderComponent } from './main-ladder/main-ladder.component';
import { RecentGamesComponent } from './recent-games/recent-games.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { TeamViewComponent } from './team-view/team-view.component';
import { HeadToHeadComponent } from './head-to-head/head-to-head.component';
import { PastGamesComponent } from './TEAM/past-games/past-games.component';
import { TeaminfoComponent } from './TEAM/teaminfo/teaminfo.component';
import { FutureGamesComponent } from './TEAM/future-games/future-games.component';
import { PlayerinfoComponent } from './TEAM/playerinfo/playerinfo.component';


const routes: Routes = [
  {
    path: 'MainLadder',
    component: MainLadderComponent
    
  },
  {
    path: 'RecentGames',
    component: RecentGamesComponent
    
  },
  {
    path: 'ViewTeam/:id',
    component: TeamViewComponent,
    children: 
    [
      {
        path:'PastGames',
        component: PastGamesComponent
      },
      {
        path: 'TeamInfo',
        component: TeaminfoComponent
      },
      {
        path: 'FutureGames',
        component: FutureGamesComponent
      },
      {
        path: 'PlayerInfo',
        component: PlayerinfoComponent
      },
      {
        path: '',
        component: PastGamesComponent
      }

    ]
    
  },
  {
    path: 'Head2Head',
    component: HeadToHeadComponent
    
  },
  {
    path: '',
    redirectTo: '/MainLadder',
    
    pathMatch: 'full'
  },
  {
    path: '**',
    component: NotFoundComponent
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
