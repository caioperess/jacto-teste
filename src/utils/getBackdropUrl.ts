import { Movie } from '../app/model/movie';

export function GetBackdropUrl(movie: Movie) {
  movie.backdrop_path = `https://image.tmdb.org/t/p/original/${movie.backdrop_path}`;
  movie.poster_path = `https://image.tmdb.org/t/p/w370_and_h556_bestv2/${movie.poster_path}`;

  return movie;
}
