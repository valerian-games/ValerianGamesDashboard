import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
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

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DashboardComponent,
    CommandsComponent,
    GamesComponent,
    GamesInfoComponent,
    SettingsComponent,
    AccountComponent,
    AdminComponent,
    AdminStreamersComponent,
    AdminCommandsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
