import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { SingleMovieComponent } from './single-movie/single-movie.component';
import { HeaderComponent } from './header/header.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { AppRoutingModule } from './app-routing.module';
import { ActorListComponent } from './actor-list/actor-list.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { HomeComponent } from './home/home.component';
import { CurentsMovieComponent } from './curents-movie/curents-movie.component';
import { FooterComponent } from './footer/footer.component';

// import { MovieService } from './services/movie-servive';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MovieCardComponent } from './movie-card/movie-card.component';


@NgModule({
  declarations: [
    AppComponent,
    MovieListComponent,
    SingleMovieComponent,
    HeaderComponent,
    MovieDetailComponent,
    ActorListComponent,
    FavoriteComponent,
    HomeComponent,
    CurentsMovieComponent,
    FooterComponent,
    MovieCardComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    // MovieService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
