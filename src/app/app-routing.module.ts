import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SlideComponent } from './slides/slide.component';

const routes: Routes = [{ path: '', redirectTo: '00', pathMatch: 'full' }, { path: ':id', component: SlideComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
