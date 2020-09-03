import { Router, ActivatedRoute } from '@angular/router';
import { EventosService } from './../eventos.service';
import { Component, OnInit } from '@angular/core';
import { Eventos } from '../eventos.model';

@Component({
  selector: 'app-eventos-delete',
  templateUrl: './eventos-delete.component.html',
  styleUrls: ['./eventos-delete.component.css']
})
export class EventosDeleteComponent implements OnInit {

  evento: Eventos;

  constructor(
    private eventosService: EventosService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.eventosService.readById(id).subscribe(evento => {
      this.evento = evento;
    })
  
  }

  deleteEventos(): void{
    this.eventosService.delete(this.evento.id).subscribe(() => {
      this.eventosService.showMessage('Evento excluído com sucesso!');
      this.router.navigate(['/eventos']);
    })
  }

  cancel(): void{
    this.router.navigate(['/eventos']);
  }

}
