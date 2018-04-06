import { NgModule } from '@angular/core';
import { RouterModule, PreloadAllModules } from '@angular/router';
import { UserComponent } from './user/user.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home/home.component';
@NgModule({
    imports: [
    RouterModule.forRoot([
         { path: '', component: HomeComponent },
         { path: 'user', component: UserComponent },
         { path: 'about', component: AboutComponent }

    ], {preloadingStrategy: PreloadAllModules})
  ],
  exports: [RouterModule]
 })
export class AppRoutingModule {}
