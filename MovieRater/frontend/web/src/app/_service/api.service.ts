import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Movie } from '../models/Movie';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseUrl = 'http://127.0.0.1:8000/api/movies/'
  headers = new HttpHeaders({
    'Content-Type': 'application/json',
    Authorization: 'Token 516cf4f2beb51f55215a216af35eb068e23121e9'
  });

  constructor(
    private httpClient: HttpClient
  ) { }

  getMovies(){
    return this.httpClient.get<Movie[]>(this.baseUrl, {headers: this.headers});
  }

  getMovie(id: number){
    return this.httpClient.get(`${this.baseUrl}${id}/`, {headers: this.headers});
  }

  rateMovie(rate: number, movieId: number){
    const body = JSON.stringify({stars: rate});
    return this.httpClient.post(`${this.baseUrl}${movieId}/rate_movie/`, body, {headers: this.headers});
  }
}
