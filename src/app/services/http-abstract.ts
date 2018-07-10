import { HttpClient } from "@angular/common/http"
import { Observable } from "rxjs/Observable";

export class HttpAbastract<T> {

    protected readonly _http: HttpClient;
    protected readonly baseUrl: string;
    private readonly resource: string;

    public constructor(private http: HttpClient, resource: string) {
        this._http = http;
        this.resource = resource;
    }

    public getAll(): Observable<T[]> {
        return this._http.get<T[]>(`${this.baseUrl}/${this.resource}`);
    }

    public get(id: string): Observable<T> {
        return this._http.get<T>(`${this.baseUrl}/${this.resource}/${id}`);
    }

    public post(body: T): Observable<T> {
        return this._http.post<T>(`${this.baseUrl}/${this.resource}`, body);
    }

    public put(id: string, body: T): Observable<T> {
        return this._http.put<T>(`${this.baseUrl}/${this.resource}/${id}`, body);
    }

    public delete(id: string): Observable<any> {
        return this._http.delete<any>(`${this.baseUrl}/${this.resource}/${id}`);
    }
}