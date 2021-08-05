import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BoxDetailsComponent } from './box-details/box-details.component';
import { BoxesComponent } from './boxes/boxes.component';

const routes: Routes = [
    { path: '', redirectTo: 'boxes', pathMatch: 'full'},
    { path: 'boxes', component: BoxesComponent},
    { path: 'boxes/:id', component: BoxDetailsComponent },
  ];

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }