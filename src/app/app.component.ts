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

  run() {
    fetch("/api/movie")
      .then((response) => response.json())
      .then((data) => {
        const detailsElement = document.getElementById("movie");
        if (detailsElement) {
          detailsElement.getElementsByTagName("img")[0].src = data.poster;
          detailsElement.getElementsByTagName("h1")[0].innerText = data.title;
          detailsElement.getElementsByTagName("p")[0].innerText = data.fullplot;

          detailsElement.style.visibility = "visible";
        }
      });
  }
}
