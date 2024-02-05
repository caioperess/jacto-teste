import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'movies',
    loadChildren: () =>
      import('./component/movies/movies.module').then(
        (mod) => mod.MoviesModule
      ),
  },
  {
    path: 'movie/:id',
    loadChildren: () =>
      import('./component/movie-details/movie-details.module').then(
        (mod) => mod.MoviesDetailsModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
