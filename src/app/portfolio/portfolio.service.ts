import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';
import PortfolioItem from '../classes/portfolioItem';
import portfolio from 'src/assets/mock/mock';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  private portfolio = portfolio;

  constructor() { }

  getAllPortfolioItems(): Observable<any> {
    return from(portfolio);
  }
}
