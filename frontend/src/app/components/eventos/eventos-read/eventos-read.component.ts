import { EventosService } from './../eventos.service';
import { Component, OnInit } from '@angular/core';
import { Eventos } from '../eventos.model';

@Component({
  selector: 'app-eventos-read',
  templateUrl: './eventos-read.component.html',
  styleUrls: ['./eventos-read.component.css']
})
export class EventosReadComponent implements OnInit {

  evento: Eventos[];
  displayedColumns = ['id', 'name', 'description','address', 'status', 'action']

  constructor(private eventosService: EventosService) { 

  }

  ngOnInit(): void {
    this.eventosService.read().subscribe(evento => {
      this.evento = evento
      console.log(evento);
    })
  }

}
