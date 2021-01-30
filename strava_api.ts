import { Injectable } from '@angular/core';
import { default as strava, Strava } from 'strava-v3';

strava.config({
  "access_token"  : "deba644de2c258ded7b91df51f530b5244de7680",
  "client_id"     : "Y60851",
  "client_secret" : "8b73fc0f8e69dc71c8ebb2f48e45a84f228c909e",
  "redirect_uri"  : "Your apps Authorization Redirection URI (Required for oauth)",
});

@Injectable({
  providedIn: 'root',
 })
 export class StravaApi {

  private auth_link = "https://www.strava.com/oauth/token";

  private async getActivities(res: any) {
    const payload = await strava.athlete.get({})
    console.log(payload)
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
