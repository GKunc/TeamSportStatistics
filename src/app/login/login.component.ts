import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    // console.log("here");
    // console.log(this.route.url);
  }

  authorizeStrava(): void {
    const client_id = '60851';
    const response_type = 'code';
    const redirect_uri = "http://localhost:4200/";
    // const redirect_uri = 'https://teamsportstatistics.herokuapp.com/';
    const approval_prompt = 'auto'
    // const scope = 'read_all';
    const scope = 'activity:read';
    const oauth_uri = `https://www.strava.com/oauth/authorize?client_id=${client_id}&response_type=${response_type}&redirect_uri=${redirect_uri}&approval_prompt=${approval_prompt}&scope=${scope}`
    window.location.href = oauth_uri;
  }
}
///////////////////////////////////////////////
//
// 1) https://www.strava.com/oauth/authorize?client_id=${client_id}&response_type=${response_type}&redirect_uri=${redirect_uri}&approval_prompt=${approval_prompt}&scope=${scope}
//      - set proper scope
// 2) https://www.strava.com/oauth/token
//      - client_id: 60851
//      - client_secret: 8b73fc0f8e69dc71c8ebb2f48e45a84f228c909e
//      - code: {code from 1)}
//      - grant_type: authorization_code
// 3) https://www.strava.com/api/v3/athlete/activities
//      - Authorization: Bearer {token from 2)}
//
///////////////////////////////////////////////
// response
//
// [
//   {
//       "resource_state": 2,
//       "athlete": {
//           "id": 74192830,
//           "resource_state": 1
//       },
//       "name": "Test 3",
//       "distance": 8750.0,
//       "moving_time": 2722,
//       "elapsed_time": 2722,
//       "total_elevation_gain": 0,
//       "type": "Run",
//       "workout_type": null,
//       "id": 4718284867,
//       "external_id": null,
//       "upload_id": null,
//       "start_date": "2021-02-04T03:00:00Z",
//       "start_date_local": "2021-02-03T19:00:00Z",
//       "timezone": "(GMT-08:00) America/Los_Angeles",
//       "utc_offset": -28800.0,
//       "start_latlng": null,
//       "end_latlng": null,
//       "location_city": null,
//       "location_state": null,
//       "location_country": null,
//       "start_latitude": null,
//       "start_longitude": null,
//       "achievement_count": 0,
//       "kudos_count": 0,
//       "comment_count": 0,
//       "athlete_count": 1,
//       "photo_count": 0,
//       "map": {
//           "id": "a4718284867",
//           "summary_polyline": null,
//           "resource_state": 2
//       },
//       "trainer": false,
//       "commute": false,
//       "manual": true,
//       "private": false,
//       "visibility": "everyone",
//       "flagged": false,
//       "gear_id": null,
//       "from_accepted_tag": null,
//       "average_speed": 3.215,
//       "max_speed": 0.0,
//       "has_heartrate": false,
//       "heartrate_opt_out": false,
//       "display_hide_heartrate_option": false,
//       "pr_count": 0,
//       "total_photo_count": 0,
//       "has_kudoed": false
//   }
// ]
