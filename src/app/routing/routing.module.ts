import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from '../home/home.component';
import { ArtistComponent } from '../artist/artist.component';
import { HistoryComponent } from "../history/history.component";

const routes: Routes = [
  { path: '',  component: HomeComponent },
  { path: 'history', component: HistoryComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class RoutingModule { }
