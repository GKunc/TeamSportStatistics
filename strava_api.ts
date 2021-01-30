import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
 })
 export class StravaApi {

  private auth_link = "https://www.strava.com/oauth/token";

  private getActivities(res: any) {
    console.log(res)
    const activities_link = `https://www.strava.com/api/v3/athlete/activities?access_token=${res.access_token}`
    fetch(activities_link)
      .then((res) => console.log(res.json()))
  }

  async reAuthorizeAndGetActivities() {
      await fetch(this.auth_link, {
          method: 'post',
          headers: {
              'Accept': 'application/json, text/plain, */*',
              'Content-Type': 'application/json'

          },
          body: JSON.stringify({
              client_id: '60851',
              client_secret: '8b73fc0f8e69dc71c8ebb2f48e45a84f228c909e',
              refresh_token: '2c27dcc3f3deef089135fcdb701fc396090bdc21',
              grant_type: 'refresh_token'
          })
        }).then(res => res.json())
        .then(res => this.getActivities(res))
  }
}
