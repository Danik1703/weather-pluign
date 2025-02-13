import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  currentTheme: string = 'light';

  constructor() {
    this.loadTheme();
  }

  toggleTheme() {
    this.currentTheme = this.currentTheme === 'light' ? 'dark' : 'light';
    this.applyTheme();
  }

  loadTheme() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      this.currentTheme = savedTheme;
    }
    this.applyTheme();
  }

  applyTheme() {
    if (this.currentTheme === 'dark') {
      document.body.classList.add('dark-theme');
      document.body.classList.remove('light-theme');
      localStorage.setItem('theme', 'dark');
    } else {
      document.body.classList.add('light-theme');
      document.body.classList.remove('dark-theme');
      localStorage.setItem('theme', 'light');
    }
  }
}
