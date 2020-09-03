import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import { EventosService } from './../eventos.service';
import { Eventos } from './../eventos.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventos-create',
  templateUrl: './eventos-create.component.html',
  styleUrls: ['./eventos-create.component.css']
})
export class EventosCreateComponent implements OnInit {

 evento: Eventos = {
   name: '',
   description: '',
   address: '',
   status: ''


   }
  constructor(private eventosService: EventosService, private router: Router) { 

  }


  ngOnInit(): void {
    
  }

  createEventos(): void{
    this.eventosService.create(this.evento).subscribe(() => {
      this.eventosService.showMessage('Evento Criado!')
      this.router.navigate(['/eventos'])
    })
  }
   
  cancel(): void{
    this.router.navigate(['/eventos'])
  }
}
