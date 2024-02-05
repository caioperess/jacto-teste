import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Params } from '@angular/router';
import { GetBackdropUrl } from '../../../utils/getBackdropUrl';
import { Movie } from '../../model/movie';
import { MoviesService } from '../../service/movies.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrl: './movie-details.component.scss',
})
export class MovieDetailsComponent implements OnInit {
  movie!: Movie;
  relatedVideos: any;
  casts: any = [];
  backdrops: any = [];
  recomendMovies: any = [];
  responsiveOptions;
  trailer!: any;
  visible: boolean = false;
  video!: any;

  constructor(
    private movieService: MoviesService,
    private router: ActivatedRoute,
    private sanitizer: DomSanitizer
  ) {
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

  ngOnInit() {
    this.router.params.subscribe((params: Params) => {
      const id = Number(params['id']);
      this.getMovieVideos(id);
      this.getMovieDetails(id);
      this.getCast(id);
      this.getBackropsImages(id);
      this.getRecomendMovies(id, 1);
    });
  }

  showDialog(videoKey: string) {
    this.video = this.sanitizer.bypassSecurityTrustResourceUrl(
      `https://www.youtube.com/embed/${videoKey}?autoplay=1&mute=1`
    );
    this.visible = true;
  }

  getMovieDetails(id: number) {
    this.movieService.getMovieDetails(id).subscribe((res: any) => {
      const movieWithCorrectBackdrop = GetBackdropUrl(res);

      this.movie = movieWithCorrectBackdrop;
    });
  }

  getMovieVideos(id: number) {
    this.movieService.getMovieVideos(id).subscribe((res: any) => {
      if (res.results.length) {
        this.trailer = res.results[0];
        this.relatedVideos = res.results;
      }
    });
  }

  getCast(id: number) {
    this.movieService.getMovieCredits(id).subscribe((res: any) => {
      this.casts = res.cast;
    });
  }

  getBackropsImages(id: number) {
    this.movieService.getBackdropsImages(id).subscribe((res: any) => {
      this.backdrops = res.backdrops;
    });
  }

  getRecomendMovies(id: number, page: number) {
    this.movieService.getRecomendMovies(id, page).subscribe((res: any) => {
      const moviesWithCorrectBackdrop = res.results.map((movie: Movie) =>
        GetBackdropUrl(movie)
      );

      this.recomendMovies = moviesWithCorrectBackdrop;
    });
  }
}
