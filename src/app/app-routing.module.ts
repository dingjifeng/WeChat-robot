import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {PreloadSelectedModuledsList} from './preload-selected-moduleds-list';
import {LayoutComponent} from './layout/layout.component';
import {AuthComponent} from './auth/auth.component';
import {Four04Component} from './four04/four04.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/robot',
    pathMatch: 'full'
  },
  {
    path: '',
    component: LayoutComponent,
    children: [
      {path: 'robot', loadChildren: 'app/layout/my-robot/my-robot.module#MyRobotModule'},
      {path: 'group', loadChildren: 'app/layout/group/group.module#GroupModule'},
      {path: 'friends', loadChildren: 'app/layout/friends/friends.module#FriendsModule'},
      {path: 'customResponse', loadChildren: 'app/layout/custom-response/custom-response.module#CustomResponseModule'}
    ]
  },
  {
    path: '',
    component: AuthComponent,
    children: []
  },
  {
    path: '**',
    component: Four04Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true, preloadingStrategy: PreloadSelectedModuledsList})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
