import { Component, OnInit, Inject } from '@angular/core';
import PortfolioItem from 'src/app/classes/portfolioItem';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-portfolio-item-details',
  templateUrl: './portfolio-item-details.component.html',
  styleUrls: ['./portfolio-item-details.component.scss']
})
export class PortfolioItemDetailsComponent implements OnInit {

  private portfolioItem: PortfolioItem;

  constructor(@Inject('portfolioItem') portfolioItem) {
    this.portfolioItem = portfolioItem.value;
   }

  ngOnInit() {
  }

}
