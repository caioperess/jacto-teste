import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  baseUrl: string;
  apiKey: string;
  language: string;
  region: string;

  constructor(private http: HttpClient) {
    this.baseUrl = 'https://api.themoviedb.org/3/';
    this.apiKey = environment.api_key;
    this.language = 'pt-BR';
    this.region = 'BR';
  }

  getNowPlayingMovies(page: number): Observable<any> {
    return this.http.get(
      `${this.baseUrl}movie/now_playing?api_key=${this.apiKey}&page=${page}&language=${this.language}&region=${this.region}`
    );
  }

  searchMovies(searchStr: string, page: number): Observable<any> {
    return this.http.get(
      `${this.baseUrl}search/movie?api_key=${this.apiKey}&query=${searchStr}&page=${page}&language=${this.language}&region=${this.region}`
    );
  }

  getPopularMovies(page: number): Observable<any> {
    return this.http.get(
      `${this.baseUrl}movie/popular?api_key=${this.apiKey}&page=${page}&language=${this.language}&region=${this.region}`
    );
  }

  getTopRatedMovies(page: number): Observable<any> {
    return this.http.get(
      `${this.baseUrl}movie/top_rated?api_key=${this.apiKey}&page=${page}&language=${this.language}&region=${this.region}`
    );
  }

  getMovieDetails(id: number): Observable<any> {
    return this.http.get(
      `${this.baseUrl}movie/${id}?api_key=${this.apiKey}&language=${this.language}&region=${this.region}`
    );
  }

  getMovieReviews(id: number): Observable<any> {
    return this.http.get(
      `${this.baseUrl}movie/${id}/reviews?api_key=${this.apiKey}&language=${this.language}&region=${this.region}`
    );
  }

  getMovieCredits(id: number): Observable<any> {
    return this.http.get(
      `${this.baseUrl}movie/${id}/credits?api_key=${this.apiKey}&language=${this.language}&region=${this.region}`
    );
  }

  getBackdropsImages(id: number) {
    return this.http.get(
      `${this.baseUrl}movie/${id}/images?api_key=${this.apiKey}`
    );
  }

  getMovieVideos(id: number): Observable<any> {
    return this.http.get(
      `${this.baseUrl}movie/${id}/videos?api_key=${this.apiKey}`
    );
  }

  getRecomendMovies(id: number, page: number): Observable<any> {
    return this.http.get(
      `${this.baseUrl}movie/${id}/recommendations?api_key=${this.apiKey}&page=${page}&language=${this.language}&region=${this.region}`
    );
  }
}
