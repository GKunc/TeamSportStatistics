import { StravaApi } from '../../core/strava_api';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  private authorizationCode: string;
  isLoading: boolean;
  activities: any;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private stravaApi: StravaApi) {
      this.isLoading = false;
    }

  async ngOnInit(): Promise<void> {
    this.authorizationCode = this.getAuthorizationCode();
    if(this.authorizationCode) {
      this.router.navigate(['dashboard']);
      await this.stravaApi.refreshAccessToken(this.authorizationCode);
      await this.getActivities();
    } else {
      this.router.navigate(['login']);
    }
  }

  getAuthorizationCode(): string {
    let authorizationCode: string;
    this.route.queryParams.subscribe(params => {
      if (params.code) {
        authorizationCode = params.code;
      } else {
        authorizationCode = null;
      }
    });
    return authorizationCode;
  }

  async getActivities(): Promise<void> {
    this.activities = await this.stravaApi.getActivities();
  }
}
