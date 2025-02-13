import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']  // Якщо є стилі для компонента
})
export class FooterComponent {
  currentDate: Date = new Date();
}
