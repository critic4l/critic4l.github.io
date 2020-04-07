import { Component, OnInit, Input } from '@angular/core';
import PortfolioItem from '../../classes/portfolioItem';

@Component({
  selector: 'app-portfolio-item',
  templateUrl: './portfolio-item.component.html',
  styleUrls: ['./portfolio-item.component.scss']
})
export class PortfolioItemComponent implements OnInit {

  @Input()
  private protfolioItem: PortfolioItem = {
    title: 'test',
    description: `Lorem ipsum dolor sit amet,
    consectetur adipiscing elit,
    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet,
    consectetur adipiscing elit,
    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
    image: '../../../assets/img/xd.jpg',
    technologies: null,
    responibilities: null,
    extraInfo: null,
  };

  constructor() { }

  ngOnInit() {
  }

}
