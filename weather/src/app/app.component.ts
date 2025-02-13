import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-header></app-header>
    <main role="main" class="main-container">
      <router-outlet></router-outlet>
    </main>
    <app-footer></app-footer>
    <app-banner></app-banner>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'weather-web-site';
}
