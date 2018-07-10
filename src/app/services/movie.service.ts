import { ApplicationErrorHandler } from './../app.application-error-handler';
import { MovieDbResponse } from './../models/moviedb-response.model';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment';
import { Injectable } from "@angular/core";

@Injectable()
export class MovieService {

    private readonly baseUrl: string = environment.apiUrl;
    private readonly apiKey: string = environment.apiKey;

    public constructor(private http: HttpClient) { }

    public buscarFilmes(page: number): Observable<MovieDbResponse> {
        return this.http
        .get<MovieDbResponse>(`${this.baseUrl}/movied/popular?${this.apiKey}&page=${page}`)
    }
}