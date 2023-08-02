import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})

export class YoutubeService{
    private apiKey = 'AIzaSyAeIiwoSgOyVgy_Ey2TN1DHy8Ho-Z9XVWo';
    private apiUrl = 'https://www.googleapis.com/youtube/v3/';

    constructor(private http: HttpClient) {  }

    searchVideos(query: string, maxResults: number): Observable<any> {
        const headers = new HttpHeaders().set('Content-Type', 'application/json');

        const params = new HttpParams()

        .set('key', this.apiKey)
        .set('part', 'snippet')
        .set('q', query)
        .set('maxResults', maxResults.toString());

        return this.http.get<any>(this.apiUrl + 'search', { headers, params});
    }

}