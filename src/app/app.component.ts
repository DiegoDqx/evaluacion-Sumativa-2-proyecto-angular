import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']  // Cambio 'styleUrl' a 'styleUrls' y lo pongo en un array
})
export class AppComponent {
  title = 'my-app';
}