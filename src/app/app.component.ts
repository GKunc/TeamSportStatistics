import { StravaApi } from './../../strava_api';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'TeamSportStatistics';
  flag = 0;

  constructor(private stravaApi: StravaApi) {};

  authorizeStrava(): void {
    const client_id = '60851';
    const response_type = 'code';
    const redirect_uri = 'https://teamsportstatistics.herokuapp.com/';
    const approval_prompt = 'auto'
    const scope = 'read_all';
    const oauth_uri = `https://www.strava.com/oauth/authorize?client_id=${client_id}&response_type=${response_type}&redirect_uri=${redirect_uri}&approval_prompt=${approval_prompt}&scope=${scope}`
    window.location.href = oauth_uri;
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
