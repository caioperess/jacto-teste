import { Component, OnInit } from '@angular/core';
import { GetBackdropUrl } from '../../../utils/getBackdropUrl';
import { Movie } from '../../model/movie';
import { MoviesService } from '../../service/movies.service';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.scss',
})
export class SliderComponent implements OnInit {
  movies!: Movie[];

  constructor(private movieService: MoviesService) {}

  ngOnInit(): void {
    this.getPlayingMovies(1);
  }

  getPlayingMovies(page: number) {
    this.movieService.getNowPlayingMovies(page).subscribe((res) => {
      const moviesWithCorrectBackdrop = res.results.map((movie: Movie) =>
        GetBackdropUrl(movie)
      );

      this.movies = moviesWithCorrectBackdrop;
    });
  }
}
