import { Component, OnInit } from '@angular/core';
import portfolio from 'src/assets/mock/mock';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {

  portfolio = portfolio;

  constructor() { }

  ngOnInit() {
  }

}
