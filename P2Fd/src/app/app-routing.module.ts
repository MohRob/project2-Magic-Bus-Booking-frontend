import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BusListComponent } from './bus-list/bus-list.component';
import { CreateBusComponent } from './create-bus/create-bus.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { LoginComponent } from './login/login.component';
import { UpdateBusComponent } from './update-bus/update-bus.component';

import { UserListComponent } from './user-list/user-list.component';

const routes: Routes = [
  {path:`users`,component:UserListComponent},
  {path:`createUsers`,component:CreateUserComponent},
  {path:`createBuses`,component:CreateBusComponent},
  {path:`buses`,component:BusListComponent},
  {path:`login`,component:LoginComponent},
  {path:`updateBus/:id`,component:UpdateBusComponent},
  {path:``,redirectTo: `login`,pathMatch:`full`}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
