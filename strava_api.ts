import { Injectable } from '@angular/core';
import { StravaApiV3 } 'strava_api_v3';

@Injectable({
  providedIn: 'root',
 })
 export class StravaApi {

  private auth_link = "https://www.strava.com/oauth/token";

  private async getActivities(res: any) {
    const defaultClient = StravaApiV3.ApiClient.instance;

    // Configure OAuth2 access token for authorization: strava_oauth
    const strava_oauth = defaultClient.authentications['strava_oauth'];
    strava_oauth.accessToken = res.access_token
    const api = new StravaApiV3.ActivitiesApi()
    const opts = {
      'includeAllEfforts': true // {Boolean} To include all segments efforts.
    };

    const callback = function(error: any, data: any, response: any) {
      if (error) {
        console.error(error);
      } else {
        console.log('API called successfully. Returned data: ' + data);
      }
    };
    api.getLoggedInAthleteActivities(opts, callback);
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
