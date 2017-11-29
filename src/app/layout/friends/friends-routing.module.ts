import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {FriendsComponent} from './friends.component';

const friendsRoutes: Routes = [{path: '', component: FriendsComponent, children: []}];

@NgModule({
  imports: [RouterModule.forChild(friendsRoutes)],
  exports: [RouterModule]
})
export class FriendsRoutingModule {
}
