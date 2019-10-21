import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ServersComponent } from './servers/servers.component';
import { ServerComponent } from './servers/server/server.component';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { UsersComponent } from './users/users.component';
import { UserComponent } from './users/user/user.component';
import { HeaderComponent } from './header/header.component';
import {Routes, RouterModule} from '@angular/router'
import { ServerService } from './servers/servers.service';
import { UserService } from './users/users.service';
import {FormsModule} from '@angular/forms';
const appRoutes:Routes = [
  {path:'',component:HomeComponent},
  {path:'servers',component:ServersComponent,children:[
    {path:':id',component:ServerComponent},
    {path:':id/edit',component:EditServerComponent}
  ]},
  {path:'users',component:UsersComponent},
 // {path:'servers/:id',component:ServerComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ServersComponent,
    ServerComponent,
    EditServerComponent,
    UsersComponent,
    UserComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule
  ],
  providers: [ServerService,UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
