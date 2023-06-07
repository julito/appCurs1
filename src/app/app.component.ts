import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Inicio', url: '/folder/Inicio', icon: 'home' },
    { title: 'Productos', url: '/productos', icon: 'paper-plane' },
  
  ];
  public labels = ['Familia', 'Amigos', 'Notas', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
