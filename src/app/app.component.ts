import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'TeamSportStatistics';
  flag = 0;
  swapText(): void {
    const text = document.getElementById('text');

    if (text)
      if(this.flag % 3 === 0)
        text.innerHTML = "Raz!";
      else if(this.flag % 3 === 1)
        text.innerHTML = "Dwa!";
      else if(this.flag % 3 === 2)
        text.innerHTML = "Trzy!";

    this.flag++;
  }
}
