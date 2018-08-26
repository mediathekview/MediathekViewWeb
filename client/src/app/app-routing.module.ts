import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DevComponent } from './sites/dev/dev.component';
import { HomeComponent } from './sites/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'dev', component: DevComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
