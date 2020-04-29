import { Component } from '@angular/core';
import { slideInAnimation } from './route-animations';
import { RouterOutlet, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.styl'],
  animations: [ slideInAnimation ]
})
export class AppComponent {
  private animation = 'animation';
  constructor(private router: Router) {}

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData[this.animation];
  }
}
