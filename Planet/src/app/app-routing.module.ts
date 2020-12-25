import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PlanetListComponent} from 'src/app/planet-list/planet-list.component';

const routes: Routes = [
  {path: '', component: PlanetListComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
