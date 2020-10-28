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

  eventos: Eventos;
  private id: number;

  constructor(
    private eventosService: EventosService, 
    private router: Router, 
    private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(getParam => {
      this.eventosService.readById(getParam.id).subscribe((eventos: any) => {
        this.eventos = eventos;
      });
      this.id = getParam.id;
    }, erro => {
      console.log('Erro ao pegar ID', erro);
    });
  }

  updateEventos(): void{
    console.log(this.eventos);
    this.eventosService.update(this.eventos).subscribe(() =>{
      this.eventosService.showMessage('Evento atualizado com sucesso!')
      this.router.navigate(['/eventos']);
    })
  }

  cancel(): void{
    this.router.navigate(['/eventos']);
  }

}
