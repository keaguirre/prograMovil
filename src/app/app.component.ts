import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],

})

export class AppComponent {
  
  public appPages = [
    { title: 'Inicio', url: 'inicio', icon: 'newspaper' },
    { title: 'Perfil', url: 'perfil', icon: 'person' },
    { title: 'Viajar', url: 'viajar', icon: 'car' },
    { title: 'Ayuda', url: 'faq', icon: 'help-buoy' },
    { title: 'Nuestro equipo', url: 'about', icon: 'people' },
    { title: 'Conversor', url: 'coversor', icon: 'earth' },
    {title: 'Cerrar Sesion', url: 'login', icon: 'log-out'},
    

  ];
  public labels = [
    {title:'DuocUC', url: '/www.duocuc.cl', icon: 'bookmark'},
    {title: 'Blackboard', url: 'about', icon: 'bookmark'},
  ];
  
  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    
  }
}

