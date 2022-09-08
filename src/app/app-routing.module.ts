import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResourcesPageComponent } from './pages/resources-page/resources-page.component';
import { UserInfoPageComponent } from './pages/user-info-page/user-info-page.component';
import { UsersPageComponent } from './pages/users-page/users-page.component';

const routes: Routes = [
  { path: '', component: UsersPageComponent },
  { path: 'resources', component: ResourcesPageComponent },
  { path: `users/:id`, component: UserInfoPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
