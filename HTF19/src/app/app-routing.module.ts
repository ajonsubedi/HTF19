import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'crew-members',
    loadChildren:() => import ('src/app/pages/crew-members/crew-members.module').then( m => m.CrewMembersPageModule)
    // loadChildren: () => import('src/app/pages/crew-members/crew-members.module').then( m => m.CrewMembersPageModule)

  },
  {
    path: 'home',
    loadChildren:() => import('src/app/pages/home/home.module').then(m => m.HomePageModule)
   // loadChildren: () => import('src/app/pages/home/home.module').then( m => m.HomePageModule)

  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
