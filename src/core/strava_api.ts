import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
 })
 export class StravaApi {

  private token_link = "https://www.strava.com/oauth/token";
  private access_token: string;
  private client_id = '60851';

  async getActivities() {
    console.log("TOKEN: " + this.access_token)
    const activities_link = `https://www.strava.com/api/v3/activities`
    await fetch(activities_link, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${this.access_token}`
      }
    })
    .then(response => response.json())
    .then(parsed => console.log(parsed));  }

  async reAuthorizeAndGetActivities() {
      await fetch(this.token_link, {
          method: 'post',
          headers: {
              'Accept': 'application/json, text/plain, */*',
              'Content-Type': 'application/json'

          },
          body: JSON.stringify({
              client_id: this.client_id,
              client_secret: '8b73fc0f8e69dc71c8ebb2f48e45a84f228c909e',
              refresh_token: '2c27dcc3f3deef089135fcdb701fc396090bdc21',
              grant_type: 'refresh_token'
          })
        }).then(res => res.json())
        .then(res => this.getActivities())
  }

  authorizeStrava(): void {
    const response_type = 'code';
    // const redirect_uri = "http://localhost:4200/";
    const redirect_uri = 'https://teamsportstatistics.herokuapp.com/';
    const approval_prompt = 'auto'
    // const scope = 'read_all';
    const scope = 'activity:read';
    const oauth_uri = `https://www.strava.com/oauth/authorize?client_id=${this.client_id}&response_type=${response_type}&redirect_uri=${redirect_uri}&approval_prompt=${approval_prompt}&scope=${scope}`
    window.location.href = oauth_uri;
  }

  async refreshAccessToken(code: string): Promise<void> {
    const client_secret = '8b73fc0f8e69dc71c8ebb2f48e45a84f228c909e';
    const grant_type = 'authorization_code';
    const token_uri = `https://www.strava.com/oauth/token?client_id=${this.client_id}&client_secret=${client_secret}&code=${code}&grant_type=${grant_type}`;

    await fetch(token_uri, {
      method: 'POST',
      headers: {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'}
    })
    .then(response => response.json())
    .then(parsed => this.access_token = parsed.access_token);
  }
}
