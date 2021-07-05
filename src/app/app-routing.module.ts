import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ActorsComponent} from "./actors/actors.component";
import {GenresComponent} from "./genres/genres.component";
import {FilmsComponent} from "./films/films.component";
import {ActorComponent} from "./actor/actor.component";
import {FilmComponent} from "./film/film.component";
import {GenreComponent} from "./genre/genre.component";

const routes: Routes = [
  {    path: "actors", component: ActorsComponent  },
  {    path: "films", component: FilmsComponent  },
  {    path: "genres", component: GenresComponent  },
  {    path: "actor", component: ActorComponent  },
  {    path: "film", component: FilmComponent  },
  {    path: "genre", component: GenreComponent  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
