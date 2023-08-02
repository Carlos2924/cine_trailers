import { Component } from "@angular/core";
import { YoutubeService } from "./youtube.service";

@Component({
    selector: 'app-youtube-search',
    template:`
    <div *ngIf="videos">
      <h2>Resultados de la búsqueda:</h2>
      <ul>
        <li *ngFor="let video of videos.items">
          <a [href]="'https://www.youtube.com/watch?v=' + video.id.videoId" target="_blank">{{ video.snippet.title }}</a>
        </li>
      </ul>
    </div>
    `,
})

export class YoutubeSearchComponent{
    videos: any;

    constructor(private youtubeService: YoutubeService) { }

    search(query: string){
        this.youtubeService.searchVideos(query, 10).subscribe((response) => {
            this.videos = response;
        })
    }
}