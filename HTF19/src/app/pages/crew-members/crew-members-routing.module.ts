import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CrewMembersPage } from './crew-members.page';

const routes: Routes = [
  {
    path: '',
    component: CrewMembersPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CrewMembersPageRoutingModule {}
