import { HeaderService } from './../../components/template/header/header.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventos-crud',
  templateUrl: './eventos-crud.component.html',
  styleUrls: ['./eventos-crud.component.css']
})
export class EventosCrudComponent implements OnInit {

  constructor(private router: Router, private headerService: HeaderService) {
    headerService.headerData = {
      title: 'Cadastro de Eventos',
      icon:   'calendar_today',
      routeUrl: '/eventos'
    }
   }

  ngOnInit(): void {
  }

  navigateToEventosCreate(): void{
    this.router.navigate(['/eventos/create'])
  }
}
