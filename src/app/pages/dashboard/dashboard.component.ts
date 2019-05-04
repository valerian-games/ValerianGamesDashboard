import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  single = [
    {
      "name": "Die",
      "value": 2542
    },
    {
      "name": "Exit",
      "value": 6548
    },
    {
      "name": "Choose",
      "value": 5461
    },
    {
      "name": "command 4",
      "value": 4356
    },
    {
      "name": "command 5",
      "value": 2345
    },
    {
      "name": "command 6",
      "value": 2523
    }
  ];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = false;
  showXAxisLabel = true;
  xAxisLabel = 'Commands';
  showYAxisLabel = true;
  yAxisLabel = 'Usage';
  
  view: any[] = [600, 300];

  colorScheme = {
    domain: ['#50D95F', '#73E354', '#97CB55', '#D7E354', '#D9CE50']
  };

  constructor() { }

  ngOnInit() {
  }

}
