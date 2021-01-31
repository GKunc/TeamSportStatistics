import { StravaApi } from './../../strava_api';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'TeamSportStatistics';

  constructor(private stravaApi: StravaApi) {};

  ngOnInit(): void {
  }

  async activities() {
    await this.stravaApi.reAuthorizeAndGetActivities();
  }

  run() {
    fetch("/api/movie")
      .then((response) => response.json())
      .then((data) => {
        const detailsElement = document.getElementById("movie");
        if (detailsElement) {
          detailsElement.getElementsByTagName("img")[0].src = data.poster;
          detailsElement.getElementsByTagName("h1")[0].innerText = data.title;
          detailsElement.getElementsByTagName("p")[0].innerText = data.fullplot;

          detailsElement.style.visibility = "visible";
        }
      });
  }
}
