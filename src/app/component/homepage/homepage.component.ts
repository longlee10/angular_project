import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
})
export class HomepageComponent {
  archives = [
    { year: 2017, month: 1 },
    { year: 2017, month: 2 },
    { year: 2017, month: 3 },
  ];

  headingColor = environment.headingColor;
}
