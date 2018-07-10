import { Component, OnInit } from "@angular/core";
import { MovieService } from "../services/movie.service";
import { MovieDbResponse } from "../models/moviedb-response.model";
import { Movie } from "../models/movie.model";

@Component({
    selector: 'filmes',
    templateUrl: './filmes.component.html',
    styleUrls: ['./filmes.component.css']
})
export class FilmesComponent implements OnInit {

    public mdbr: MovieDbResponse;
    public filmes: Array<Movie> = new Array<Movie>();
    public page: number = 1;

    public constructor(private movieService: MovieService) { }

    public ngOnInit(): void {
        this.buscarFilmes();
    }

    private buscarFilmes(): void {
        this.movieService.buscarFilmes(this.page).subscribe(
            (data) => {
                this.mdbr = data;
                data.results.forEach(filme => {
                    this.filmes.push(filme);
                })

            },
            (error) => {
                console.log(error);
            },
            () => {
                this.page++;
            }
        )
    }

    public onScroll() {
        this.buscarFilmes();
    }

}