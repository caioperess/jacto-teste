import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GetBackdropUrl } from '../../../utils/getBackdropUrl';
import { Movie } from '../../model/movie';
import { MoviesService } from '../../service/movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrl: './movies.component.scss',
})
export class MoviesComponent implements OnInit {
  movies!: Movie[];
  total_results!: number;
  first = 0;
  searchText: string = '';

  constructor(private movieService: MoviesService, private router: Router) {
    const state = this.router.getCurrentNavigation()?.extras.state;

    if (state) {
      this.searchText = state['search'];
    }
  }

  ngOnInit(): void {
    if (this.searchText.length > 0) {
      this.searchMovies(1);
    } else {
      this.getTopRatedMovies(1);
    }
  }

  getTopRatedMovies(page: number) {
    this.movieService.getTopRatedMovies(page).subscribe((res) => {
      const correctMoviesWithBackdrop = res.results.map((movie: Movie) =>
        GetBackdropUrl(movie)
      );

      this.total_results = res.total_results;
      this.movies = correctMoviesWithBackdrop;
    });
  }

  changePage(event: any) {
    if (this.searchText.length > 0) {
      this.searchMovies(event.page + 1);
    } else {
      this.getTopRatedMovies(event.page + 1);
    }
  }

  searchMovies(page: number) {
    this.movieService.searchMovies(this.searchText, page).subscribe((res) => {
      const correctMoviesWithBackdrop = res.results.map((movie: Movie) =>
        GetBackdropUrl(movie)
      );

      console.log(res.results);

      this.total_results = res.total_results;
      this.movies = correctMoviesWithBackdrop;
    });
  }
}
