import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  private authorizationCode: string;

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.authorizationCode = this.getAuthorizationCode();
    if(this.authorizationCode) {
      console.log("CODE" + this.authorizationCode)
      this.router.navigate(['dashboard']);
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

  saveTokenToDatabase(): void {

  }
}
