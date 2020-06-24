import { Component, OnInit } from '@angular/core';
import { PortfolioService } from './portfolio.service';
import PortfolioItem from '../classes/portfolioItem';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {

  portfolio: PortfolioItem[];

  constructor(private ps: PortfolioService) { }

  ngOnInit() {
    this.fetchDataFromService();
  }

  fetchDataFromService() {
    const tmp = [];
    this.ps.getAllPortfolioItems().subscribe(
      items => {
        tmp.push(items);
      },
      err => console.log(err)
    );
    this.portfolio = tmp;
  }

}
