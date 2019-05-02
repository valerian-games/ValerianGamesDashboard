import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { CommandsComponent } from './pages/commands/commands.component';
import { GamesComponent } from './pages/games/games.component';
import { GamesInfoComponent } from './pages/games-info/games-info.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { AccountComponent } from './pages/account/account.component';
import { AdminComponent } from './pages/admin/admin.component';
import { AdminStreamersComponent } from './pages/admin-streamers/admin-streamers.component';
import { AdminCommandsComponent } from './pages/admin-commands/admin-commands.component';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: HomeComponent,
    children: [
      { path: '', component: DashboardComponent },
      { path: 'commands', component: CommandsComponent },
      { path: 'games', component: GamesComponent },
      { path: 'games/:id', component: GamesInfoComponent },
      { path: 'settings', component: SettingsComponent },
      { path: 'account', component: AccountComponent },
      { path: 'admin/dashboard', component: AdminComponent },
      { path: 'admin/users', component: AdminStreamersComponent },
      { path: 'admin/commands', component: AdminCommandsComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
