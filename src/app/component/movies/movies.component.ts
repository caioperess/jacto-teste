import { Component, OnInit } from '@angular/core';
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

  constructor(private movieService: MoviesService) {}

  ngOnInit(): void {
    this.getTopRatedMovies(1);
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
    this.getTopRatedMovies(event.page + 1);
  }

  // searchMovies() {
  //   this.movieService.searchMovies(this.searchStr).subscribe(res => {
  //     this.searchRes = res.results;
  //   });
  // }
}
