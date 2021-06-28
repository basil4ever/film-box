import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ActorsComponent} from "./actors/actors.component";
import {GenresComponent} from "./genres/genres.component";
import {FilmsComponent} from "./films/films.component";

const routes: Routes = [
  {    path: "actors", component: ActorsComponent  },
  {    path: "films", component: FilmsComponent  },
  {    path: "genres", component: GenresComponent  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
