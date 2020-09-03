import { Router, ActivatedRoute } from '@angular/router';
import { EventosService } from './../eventos.service';
import { Component, OnInit } from '@angular/core';
import { Eventos } from '../eventos.model';

@Component({
  selector: 'app-eventos-update',
  templateUrl: './eventos-update.component.html',
  styleUrls: ['./eventos-update.component.css']
})
export class EventosUpdateComponent implements OnInit {

  evento: Eventos;

  constructor(
    private eventosService: EventosService, 
    private router: Router, 
    private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')
    this.eventosService.readById(id).subscribe(evento =>{
      this.evento = evento;
    })
  }

  updateEventos(): void{
    this.eventosService.update(this.evento).subscribe(() =>{
      this.eventosService.showMessage('Evento atualizado com sucesso!')
      this.router.navigate(['/eventos']);
    })
  }

  cancel(): void{
    this.router.navigate(['/eventos']);
  }

}
