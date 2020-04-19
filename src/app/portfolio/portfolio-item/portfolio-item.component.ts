import { Component, OnInit, Input, Injector, ReflectiveInjector, ViewContainerRef } from '@angular/core';
import PortfolioItem from '../../classes/portfolioItem';
import { ComponentPortal, ComponentType } from '@angular/cdk/portal';
import { Overlay, OverlayConfig } from '@angular/cdk/overlay';
import { PortfolioComponent } from '../portfolio.component';
import { PortfolioItemDetailsComponent } from '../portfolio-item-details/portfolio-item-details.component';

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

  constructor(private overlay: Overlay, private viewContainerRef: ViewContainerRef) { }

  ngOnInit() {
  }

  displayDetails() {
    const config = new OverlayConfig();

    config.positionStrategy = this.overlay.position()
      .global()
      .centerHorizontally()
      .centerVertically();
    config.hasBackdrop = true;

    const overlayRef = this.overlay.create(config);

    overlayRef.backdropClick().subscribe(() => {
      overlayRef.dispose();
    });

    const injector: Injector = ReflectiveInjector.resolveAndCreate([
      {
        provide: 'portfolioItem',
        useValue: {
          value: this.protfolioItem
        }
      }
    ])

    const componentRef = overlayRef.attach(
      new ComponentPortal(
        PortfolioItemDetailsComponent,
        this.viewContainerRef,
        injector));
  }

}
