import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { ActorListComponent } from './actor-list/actor-list.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { HomeComponent } from './home/home.component';
import { CurentsMovieComponent } from './curents-movie/curents-movie.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'moviedetails/:id', component: MovieDetailComponent },
  { path: 'movies', component: MovieListComponent },
  { path: 'actors', component: ActorListComponent },
  { path: 'favorites', component: FavoriteComponent },
  { path: 'curents', component: CurentsMovieComponent }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
