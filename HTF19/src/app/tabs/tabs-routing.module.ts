import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'Home',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../pages/Home/Home.module').then(m => m.HomePageModule)
          }
        ]
      },
      {
        path: 'Crew-Members',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../pages/crew-members/Crew-Members.module').then(m => m.CrewMembersPageModule)

          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/Home',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/Home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
