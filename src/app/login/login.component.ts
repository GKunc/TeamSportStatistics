import { StravaApi } from '../../core/strava_api';
import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(private readonly stravaApi: StravaApi) {}

  authorizeStrava(): void {
    this.stravaApi.authorizeStrava();
  }
}
