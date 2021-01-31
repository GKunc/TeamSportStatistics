import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  constructor(
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    if(this.isAuthorized()) {
      this.router.navigate(['dashboard']);
    } else {
      this.router.navigate(['login']);
    }
  }

  isAuthorized() {
    console.log("IS AUTHORIZED")
    this.route.queryParams.subscribe(params => {
      console.log(params);
    });
    console.log("------")

    return false;
  }

}
