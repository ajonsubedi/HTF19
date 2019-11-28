import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CrewMembersPageRoutingModule } from './crew-members-routing.module';

import { CrewMembersPage } from './crew-members.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CrewMembersPageRoutingModule
  ],
  declarations: [CrewMembersPage]
})
export class CrewMembersPageModule {}
