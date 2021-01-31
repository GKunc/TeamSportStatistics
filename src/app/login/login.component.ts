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
    const redirect_uri = 'https://teamsportstatistics.herokuapp.com/';
    const approval_prompt = 'auto'
    const scope = 'read_all';
    const oauth_uri = `https://www.strava.com/oauth/authorize?client_id=${client_id}&response_type=${response_type}&redirect_uri=${redirect_uri}&approval_prompt=${approval_prompt}&scope=${scope}`
    window.location.href = oauth_uri;
  }
}
