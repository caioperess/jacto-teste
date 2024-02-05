import { Component, OnInit } from '@angular/core';
import { GetBackdropUrl } from '../../../utils/getBackdropUrl';
import { Movie } from '../../model/movie';
import { MoviesService } from '../../service/movies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  popular_movies!: Movie[];
  responsiveOptions!: any;
  class = 'carousel-content';

  constructor(private movies: MoviesService) {
    this.responsiveOptions = [
      {
        breakpoint: '1024px',
        numVisible: 3,
        numScroll: 3,
      },
      {
        breakpoint: '768px',
        numVisible: 2,
        numScroll: 2,
      },
      {
        breakpoint: '560px',
        numVisible: 1,
        numScroll: 1,
      },
    ];
  }

  ngOnInit(): void {
    this.popularMovies(1);
  }

  popularMovies(page: number) {
    this.movies.getPopularMovies(page).subscribe((res: any) => {
      const correctBackdropMovies = res.results.map((movie: Movie) =>
        GetBackdropUrl(movie)
      );

      this.popular_movies = correctBackdropMovies;
    });
  }
}
